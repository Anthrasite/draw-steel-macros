$packsJson = @()
$macroIds = @()

# Generate macro DB files
Get-ChildItem $PSScriptRoot\..\macros -Directory -Recurse | ForEach-Object {
    $dirPath = $_
    $dirName = Split-Path $_ -Leaf
    $dbFileContents = ""

    # Add all js files to the new db file
    Get-ChildItem $_ -Filter *.js | ForEach-Object {
        if ($_.BaseName.StartsWith("_"))
            { return }

        $fileContents = Get-Content $_
        $updateFile = $false

        # Get the existing icon path or use a default icon path based on the directory
        $imgPath = $null
        $imgMatches = Select-String -Path $_ '//@img=([^\r\n]*)' -AllMatches
        if ($imgMatches.Length -gt 0)
            { $imgPath = $imgMatches[0].Matches[0].Groups[1].Value }
        else {
            $imgPath = switch ($dirName) {
                "Ancestry_Devil" { "icons/creatures/unholy/demon-fire-horned-mask.webp" }
                "Ancestry_DragonKnight" { "icons/creatures/reptiles/dragon-horned-blue.webp" }
                "Ancestry_Dwarf" { "icons/environment/wilderness/cave-entrance-dwarven-hill.webp" }
                "Ancestry_Hakaan" { "icons/magic/earth/strike-fist-stone.webp" }
                "Ancestry_HighElf" { "icons/environment/settlement/watchtower-cliff.webp" }
                "Ancestry_Human" { "icons/environment/people/commoner.webp" }
                "Ancestry_Memonek" { "icons/skills/social/trading-justice-scale-yellow.webp" }
                "Ancestry_Orc" { "icons/weapons/axes/axe-double-white-red.webp" }
                "Ancestry_Polder" { "icons/magic/light/orbs-hand-gray.webp" }
                "Ancestry_Revenant" { "icons/magic/death/hand-dirt-undead-zombie.webp" }
                "Ancestry_TimeRaider" { "icons/magic/symbols/star-rising-purple.webp" }
                "Ancestry_WodeElf" { "icons/magic/nature/tree-twisted-glow-yellow.webp" }
                "Class_Censor" { "icons/magic/holy/barrier-shield-winged-blue.webp" }
                "Class_Conduit" { "icons/magic/holy/prayer-hands-glowing-yellow.webp" }
                "Class_Elementalist" { "icons/magic/nature/beam-hand-leaves-green.webp" }
                "Class_Fury" { "icons/skills/melee/strike-axe-red.webp" }
                "Class_Null" { "icons/skills/melee/unarmed-punch-fist.webp" }
                "Class_Shadow" { "icons/magic/unholy/silhouette-robe-evil-power.webp" }
                "Class_Tactician" { "icons/weapons/swords/sword-hilt-steel-green.webp" }
                "Class_Talent" { "icons/magic/perception/eye-ringed-glow-angry-small-teal.webp" }
                "Class_Troubadour" { "icons/tools/instruments/lute-gold-brown.webp" }
                "Complications" { "icons/magic/control/debuff-chains-shackles-movement-blue.webp" }
                "Kits" { "icons/equipment/shield/buckler-boss-iron-wood-brown.webp" }
                "Perks" { "icons/magic/light/hand-sparks-glow-yellow.webp" }
                "Titles" { "icons/skills/trades/academics-merchant-scribe.webp" }
                default { "icons/svg/dice-target.svg" }
            }

            $fileContents = ,"//@img=${imgPath}" + $fileContents
            $updateFile = $true
        }

        # Get the existing name, try to get the name from the macro, or use the file name
        $name = $_.BaseName
        $nameMatches = Select-String -Path $_ '//@name=([^\r\n]*)' -AllMatches
        if ($nameMatches.Length -gt 0)
            { $name = $nameMatches[0].Matches[0].Groups[1].Value }
        else {
            $nameMatches = Select-String -Path $_ '^\s*name:\s*["`]([^"`]*)["`]' -AllMatches
            if ($nameMatches.Length -gt 0)
                { $name = $nameMatches[0].Matches[0].Groups[1].Value }

            $fileContents = ,"//@name=${name}" + $fileContents
            $updateFile = $true
        }

        # Get the existing id from the file, or generate a new id and prepend it to the file
        $id = $null
        $idMatches = Select-String -Path $_ '//@id=([^\r\n]*)' -AllMatches
        if ($idMatches.Length -gt 0)
            { $id = $idMatches[0].Matches[0].Groups[1].Value }
        else {
            $charSet = [Char[]]'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            $id = (Get-Random -Count 16 -InputObject $charSet) -join ''

            $fileContents = ,"//@id=${id}" + $fileContents
            $updateFile = $true
        }

        # Ensure this id doesn't already exist
        if ($macroIds -contains $id) {
            Write-Host "Error: Multiple macros with id $id"
            Exit
        }
        $macroIds += $id

        # Get the file contents as a single string, escaping slashes, quotes, and newlines
        $command = $fileContents | ForEach-Object{
            $_.replace("\", "\\").replace("`"", "\`"")
        } | Join-String -Separator "\n"

        $dbFileContents = $dbFileContents + "{ `"_id`": `"${id}`", `"name`": `"${name}`", `"scope`": `"global`", `"type`": `"script`", `"ownership`": { `"default`": 0 }, `"img`": `"${imgPath}`", `"command`": `"${command}`" }`n"

        if ($updateFile)
            { $fileContents | Set-Content $_ }
    }

    # If the db file isn't empty (i.e. there were js files in this directory), create pack JSON and a db file
    if ($dbFileContents.length -gt 0) {
        $packPath = ($_ | Resolve-Path -Relative).substring(2)

        $packName = $dirName
        $packLabel = $packName.replace("_", " - ")
        $packDBFileName = "${packName}_macros.db"

        $packsJson += @{
            "name" = $packName
            "label" = $packLabel
            "path" = "packs\${packDBFileName}"
            "type" = "Macro"
        }

        New-Item "packs\${packDBFileName}" -ItemType File -Force -Value $dbFileContents | Out-Null
    }
}

# Generate item DB files
Get-ChildItem $PSScriptRoot\..\items -Directory -Recurse | ForEach-Object {
    $dirPath = $_
    $dirName = Split-Path $_ -Leaf
    $dbFileContents = ""

    # Add all html files to the new db file
    Get-ChildItem $_ -Filter *.html | ForEach-Object {
        if ($_.BaseName.StartsWith("_"))
            { return }

        $fileContents = Get-Content $_
        $updateFile = $false

        # Get the existing icon path or use a default icon
        $imgPath = $null
        $imgMatches = Select-String -Path $_ '<!-- @img=(.*) -->' -AllMatches
        if ($imgMatches.Length -gt 0)
            { $imgPath = $imgMatches[0].Matches[0].Groups[1].Value }
        else {
            $imgPath = "icons/svg/dice-target.svg"

            $fileContents = ,"<!-- @img=${imgPath} -->" + $fileContents
            $updateFile = $true
        }

        # Get the existing name or use the file name
        $name = $_.BaseName
        $nameMatches = Select-String -Path $_ '<!-- @name=(.*) -->' -AllMatches
        if ($nameMatches.Length -gt 0)
            { $name = $nameMatches[0].Matches[0].Groups[1].Value }
        else {
            $fileContents = ,"<!-- @name=${name} -->" + $fileContents
            $updateFile = $true
        }

        # Get the existing id from the file, or generate a new id and prepend it to the file
        $id = $null
        $idMatches = Select-String -Path $_ '<!-- @id=(.*) -->' -AllMatches
        if ($idMatches.Length -gt 0)
            { $id = $idMatches[0].Matches[0].Groups[1].Value }
        else {
            $charSet = [Char[]]'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            $id = (Get-Random -Count 16 -InputObject $charSet) -join ''

            $fileContents = ,"<!-- @id=${id} -->" + $fileContents
            $updateFile = $true
        }

        # Ensure this id doesn't already exist
        if ($macroIds -contains $id) {
            Write-Host "Error: Multiple macros with id $id"
            Exit
        }
        $macroIds += $id

        # Get the file contents as a single string, escaping slashes, quotes, and newlines
        $description = $fileContents | ForEach-Object{
            $_.replace("\", "\\").replace("`"", "\`"")
        } | Join-String -Separator "\n"

        $dbFileContents = $dbFileContents + "{ `"_id`": `"${id}`", `"name`": `"${name}`", `"img`": `"${imgPath}`", `"type`": `"item`", `"ownership`": { `"default`": 0 }, `"effects`": [], `"system`": { `"description`": `"${description}`", `"quantity`": 1, `"weight`": 0, `"attributes`": {}, `"groups`": {} } }`n"

        if ($updateFile)
            { $fileContents | Set-Content $_ }
    }

    # If the db file isn't empty (i.e. there were html files in this directory), create pack JSON and a db file
    if ($dbFileContents.length -gt 0) {
        $packPath = ($_ | Resolve-Path -Relative).substring(2)

        $packName = $dirName
        $packLabel = $packName.replace("_", " - ")
        $packDBFileName = "${packName}_items.db"

        $packsJson += @{
            "name" = $packName
            "label" = $packLabel
            "path" = "packs\${packDBFileName}"
            "type" = "Item"
        }

        New-Item "packs\${packDBFileName}" -ItemType File -Force -Value $dbFileContents | Out-Null
    }
}

# Output the packs JSON to the console, and save it to the clipboard
$json = @{ "packs" = $packsJson } | ConvertTo-Json -Depth 10
Write-Host $json
Set-Clipboard $json

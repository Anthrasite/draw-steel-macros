//@id=JmX14YjwEcHVSWBq
//@name=Pirate
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Pirate",
  description: `<p>You have a piratical past (and maybe a piratical present and future as well). Though you’re not well-known ashore, other pirates have a way of recognizing their own.</p>
    <p><b>Benefit:</b> When interacting with pirates or pirate hunters, you treat your Renown as 2 higher than usual. Additionally, you hold a piece of a pirate map, with a handful of other pirates in different locations holding the other pieces. With all the pieces, you’d know the location of a fabulous pirate treasure.</p>
    <p><b>Drawback:</b> The pirates holding the other pieces of the map would very much like to get their hands on your piece, and have no qualms about killing you to get it. Furthermore, the pirate treasure is said to be cursed or haunted.</p>`,
  source: "Complication"
});


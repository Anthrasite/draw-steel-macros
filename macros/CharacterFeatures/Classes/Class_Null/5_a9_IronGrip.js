//@id=Ly9jSU6Wa8GE4wcK
//@name=Iron Grip
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Iron Grip",
  flavorText: "You grab the target with supernatural force.",
  resourceCost: 9,
  keywords: "Melee, Psionic, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "10 + A damage; A < WEAK, grabbed",
  tier2Effect: "14 + A damage; A < AVERAGE, grabbed",
  tier3Effect: "18 + A damage; A < STRONG, grabbed",
  effect: "While grabbed this way, the target takes a bane on the Escape Grab maneuver. Each time they use that maneuver, they take damage equal to twice your Agility score."
});

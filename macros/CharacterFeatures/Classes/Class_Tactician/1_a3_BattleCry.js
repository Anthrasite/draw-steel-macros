//@id=wlav4ZQBeH5oSnU9
//@name=Battle Cry
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Battle Cry",
  flavorText: "You shout a phrase that galvanizes your team.",
  resourceCost: 3,
  keywords: "Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Three allies",
  powerRollStat: "Reason",
  tier1Effect: "Each target gains 1 surge.",
  tier2Effect: "Each target gains 2 surges.",
  tier3Effect: "Each target gains 3 surges."
});

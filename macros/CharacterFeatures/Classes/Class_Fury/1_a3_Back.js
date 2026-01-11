//@id=pcuFDyeTg8zNafvY
//@name=Back!
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Back!",
  resourceCost: 3,
  flavorText: "You hew about you with your mighty weapon, hurling enemies backward.",
  keywords: "Area, Melee, Weapon",
  type: "Main action",
  distance: "1 burst",
  target: "Each enemy in the area",
  powerRollStat: "Might",
  tier1Effect: "5 damage",
  tier2Effect: "8 damage; push 1",
  tier3Effect: "11 damage; push 3"
});

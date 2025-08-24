//@id=h9WGdTRvQzKUn7P0
//@name=Entropic Field
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Entropic Field",
  flavorText: "You drastically increase the local entropy.",
  resourceCost: 5,
  keywords: "Area, Psionic, Weapon",
  type: "Main action",
  distance: "3 cube within 1",
  target: "Each enemy in the area",
  powerRollStat: "Agility",
  tier1Effect: "6 cold damage; A < WEAK, slowed (save ends)",
  tier2Effect: "9 cold damage; A < AVERAGE, slowed (save ends)",
  tier3Effect: "13 cold damage; A < STRONG, slowed (save ends)"
});

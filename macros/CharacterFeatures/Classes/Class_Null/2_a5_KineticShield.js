//@id=6fXoHPiRmcj0KgBz
//@name=Kinetic Shield
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Kinetic Shield",
  flavorText: "You manifest a force barrier that absorbs incoming kinetic energy.",
  resourceCost: 5,
  keywords: "Psionic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  powerRollStat: "Intuition",
  tier1Effect: "You gain 10 temporary Stamina.",
  tier2Effect: "You gain 15 temporary Stamina.",
  tier3Effect: "You gain 20 temporary Stamina.",
  effect: "While you have temporary Stamina from this ability, you can’t be made bleeding even while dying."
});

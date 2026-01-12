//@id=Ne61HTSgB9tWFq5r
//@name=Phase Step
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Phase Step`,
  flavorText: `You weaken your connection to this manifold, allowing you to move through and damage enemies.`,
  resourceCost: 9,
  keywords: `Melee, Psionic, Weapon`,
  type: `Main action`,
  distance: `Self; see below`,
  target: `Self`,
  powerRollStat: `Agility`,
  tier1Effect: `6 damage; M < WEAK, dazed`,
  tier2Effect: `8 damage; M < AVERAGE, dazed`,
  tier3Effect: `12 damage; M < STRONG, dazed`,
  effect: `You can shift up to your speed, and squares occupied by enemies or objects are not difficult terrain for this shift. You make one power roll that targets each enemy you moved through during this shift.`,
});

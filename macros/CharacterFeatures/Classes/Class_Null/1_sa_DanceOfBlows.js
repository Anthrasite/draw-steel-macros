//@id=3gbGYhz8UPLNx50q
//@name=Dance of Blows
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Dance of Blows`,
  flavorText: `You strike everywhere at once, tricking an enemy into moving out of position.`,
  keywords: `Area, Psionic, Weapon`,
  type: `Main action`,
  distance: `1 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Agility`,
  tier1Effect: `3 damage`,
  tier2Effect: `4 damage`,
  tier3Effect: `5 damage`,
  effect: `You can slide one adjacent enemy up to a number of squares equal to your Intuition score.`,
});

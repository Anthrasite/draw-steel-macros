//@id=4XG2dZQ5kJ6qSK8h
//@name=Your Entrails Are Your Extrails!
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Your Entrails Are Your Extrails!`,
  resourceCost: 3,
  flavorText: `Hard for them to fight when they’re busy holding in their giblets.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `3 + M damage; M < WEAK, bleeding (save ends)`,
  tier2Effect: `5 + M damage; M < AVERAGE, bleeding (save ends)`,
  tier3Effect: `8 + M damage; M < STRONG, bleeding (save ends)`,
  effect: `While bleeding this way, the target takes damage equal to your Might score at the end of each of your turns.`
});

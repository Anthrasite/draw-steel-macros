//@id=r6jn1mdY2oNUcS5y
//@name=To the Death!
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `To the Death!`,
  flavorText: `Your reckless assault leaves you tactically vulnerable.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `3 + M damage`,
  tier2Effect: `6 + M damage`,
  tier3Effect: `9 + M damage`,
  effect: `You gain 2 surges, and the target can make an opportunity attack against you as a free triggered action.`,
  beforeRollFunc: async function(rollResult) {
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 2, isDelta: true });
  },
});

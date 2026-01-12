//@id=bVW7A1w4dnMmtCOS
//@name=Out of the Way!
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Out of the Way!`,
  resourceCost: 3,
  flavorText: `Your enemies will clear your path—whether they want to or not.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Might`,
  tier1Effect: `3 + M damage; slide 2`,
  tier2Effect: `5 + M damage; slide 3`,
  tier3Effect: `8 + M damage; slide 5`,
  effect: `When you slide the target, you can move into any square they leave. If you take damage from an opportunity attack by moving this way, the target takes the same damage.`,
});

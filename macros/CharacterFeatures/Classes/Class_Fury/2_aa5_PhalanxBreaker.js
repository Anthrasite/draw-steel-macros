//@id=GjJLY61rs849iQOV
//@name=Phalanx-Breaker
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Phalanx-Breaker`,
  resourceCost: 5,
  flavorText: `Organizing your forces like feckless creatures of Law. Pitiful.`,
  keywords: `Melee, Weapon`,
  type: `Main action`,
  distance: `Self; see below`,
  target: `Self`,
  powerRollStat: `Might`,
  tier1Effect: `3 + M damage; P < WEAK, dazed and frightened (save ends)`,
  tier2Effect: `5 + M damage; P < AVERAGE, dazed and frightened (save ends)`,
  tier3Effect: `8 + M damage; P < STRONG, dazed and frightened (save ends)`,
  effect: `You shift up to your speed and make one power roll that targets up to three enemies you move adjacent to during this shift.`,
});

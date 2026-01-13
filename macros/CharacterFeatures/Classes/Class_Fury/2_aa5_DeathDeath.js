//@id=2dvpgIHwlcTaMNEF
//@name=Death … Death!
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Death … Death!`,
  resourceCost: 5,
  flavorText: `Your unbridled rage strikes terror in their hearts.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Might`,
  tier1Effect: `3 + M damage; P < WEAK, dazed and frightened (save ends)`,
  tier2Effect: `5 + M damage; P < AVERAGE, dazed and frightened (save ends)`,
  tier3Effect: `8 + M damage; P < STRONG, dazed and frightened (save ends)`,
});

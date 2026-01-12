//@id=o46JfpmK1ADVseGB
//@name=Hit and Run
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hit and Run`,
  flavorText: `Staying in constant motion helps you slip out of reach after a brutal assault.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `2 + M damage`,
  tier2Effect: `5 + M damage`,
  tier3Effect: `7 + M damage; A < STRONG, slowed (save ends)`,
  effect: `You can shift 1 square.`,
});

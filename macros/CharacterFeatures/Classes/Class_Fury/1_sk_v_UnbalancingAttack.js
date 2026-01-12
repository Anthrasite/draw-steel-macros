//@id=kvW8Mpg5EBAxOqUh
//@name=Unbalancing Attack
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Unbalancing Attack`,
  flavorText: `A wild assault forces your foe onto their back.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `4 + M damage; A < WEAK, prone`,
  tier2Effect: `7 + M damage; A < AVERAGE, prone`,
  tier3Effect: `9 + M damage; A < STRONG, prone`,
});

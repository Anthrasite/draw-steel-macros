//@id=FmDpAlxM4EvT1eJy
//@name=Bear Claws
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Bear Claws`,
  flavorText: `Attacks with your sharp and deadly claws grab the weak.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `2 + M damage; M < WEAK, grabbed`,
  tier2Effect: `5 + M damage; M < AVERAGE, grabbed`,
  tier3Effect: `11 + M damage; M < STRONG, grabbed`,
});

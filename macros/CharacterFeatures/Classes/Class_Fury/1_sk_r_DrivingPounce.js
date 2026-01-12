//@id=2L5zUmIVlu0fNdxT
//@name=Driving Pounce
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Driving Pounce`,
  flavorText: `Your enemies try in vain to fall back from your pouncing attack.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Agility`,
  tier1Effect: `4 + A damage`,
  tier2Effect: `7 + A damage; push 1`,
  tier3Effect: `9 + A damage; push 2`,
  effect: `You can shift up to the same number of squares that you pushed the target.`,
});

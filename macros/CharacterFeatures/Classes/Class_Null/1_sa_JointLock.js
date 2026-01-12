//@id=OApXWqUfSGh7HKgu
//@name=Joint Lock
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Joint Lock`,
  flavorText: `You contort your enemy’s body into a stance they struggle to escape from.`,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Agility`,
  tier1Effect: `4 + A damage; A < WEAK, grabbed`,
  tier2Effect: `7 + A damage; A < AVERAGE, grabbed`,
  tier3Effect: `9 + A damage; A < STRONG, grabbed`,
});

//@id=gnbRdKcSUskwhjv0
//@name=Kinetic Strike
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Kinetic Strike`,
  flavorText: `Your opponent staggers. They cannot ignore you.`,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Agility`,
  tier1Effect: `4 + A damage; taunted (EoT)`,
  tier2Effect: `5 + A damage; taunted (EoT), slide 1`,
  tier3Effect: `6 + A damage; taunted (EoT), slide 2`,
});

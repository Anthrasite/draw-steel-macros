//@id=ld6Qjciuw4eZUOJD
//@name=Force Redirected
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Force Redirected`,
  flavorText: `The force of your strike moves your target in a surprising direction.`,
  resourceCost: 5,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 3`,
  target: `One creature`,
  powerRollStat: `Agility`,
  tier1Effect: `8 + A damage; slide 1`,
  tier2Effect: `12 + A damage; slide 3`,
  tier3Effect: `16 + A damage; slide 5`,
});

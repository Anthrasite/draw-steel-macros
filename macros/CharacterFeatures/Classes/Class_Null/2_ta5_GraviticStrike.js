//@id=FfK7jZG2AOiQtVyP
//@name=Gravitic Strike
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Gravitic Strike`,
  flavorText: `Your fist emanates gravitic force that pulls a distant enemy closer.`,
  resourceCost: 5,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 3`,
  target: `One creature`,
  powerRollStat: `Agility`,
  tier1Effect: `8 + A psychic damage; vertical pull 3`,
  tier2Effect: `12 + A psychic damage; vertical pull 5`,
  tier3Effect: `16 + A psychic damage; vertical pull 7`,
});

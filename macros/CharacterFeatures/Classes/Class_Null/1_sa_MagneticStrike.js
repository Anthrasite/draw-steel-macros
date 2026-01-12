//@id=NfyHIg3voFwjrmME
//@name=Magnetic Strike
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Magnetic Strike`,
  flavorText: `The force of your blow extends past the limits of your body, pulling your enemy closer.`,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 2`,
  target: `One creature`,
  powerRollStat: `Agility`,
  tier1Effect: `5 + A psychic damage; vertical pull 1`,
  tier2Effect: `8 + A psychic damage; vertical pull 2`,
  tier3Effect: `11 + A psychic damage; vertical pull 3`,
});

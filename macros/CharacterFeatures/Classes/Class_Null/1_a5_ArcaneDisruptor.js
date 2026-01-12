//@id=SMgQOZehxya7n6Rf
//@name=Arcane Disruptor
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Arcane Disruptor`,
  flavorText: `Your blow reorders a foe’s body, causing pain if they attempt to channel sorcery.`,
  resourceCost: 5,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Agility`,
  tier1Effect: `8 + A psychic damage; M < WEAK, weakened (save ends)`,
  tier2Effect: `12 + A psychic damage; M < AVERAGE, weakened (save ends)`,
  tier3Effect: `16 + A psychic damage; M < STRONG, weakened (save ends)`,
  effect: `While weakened this way, the target takes damage equal to your Intuition score whenever they use a supernatural ability that costs Malice.`,
});

//@id=QHe9EiukbKw3XR8t
//@name=Overwhelm
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Overwhelm`,
  flavorText: `You overload their senses, turning all their subconscious thoughts into conscious ones.`,
  resourceCost: 5,
  keywords: `Psionic, Ranged, Strike, Telepathy`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Reason`,
  tier1Effect: `6 + R psychic damage; I < WEAK, slowed (save ends)`,
  tier2Effect: `10 + R psychic damage; I < AVERAGE, weakened (save ends)`,
  tier3Effect: `14 + R psychic damage; I < STRONG, dazed (save ends)`,
  strainedEffect: `You start crying, and you can’t use triggered actions or make free strikes until the end of the target’s next turn.`,
});

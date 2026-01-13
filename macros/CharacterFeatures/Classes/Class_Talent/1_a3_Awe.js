//@id=Rdp7m8PYBvU5F1Kx
//@name=Awe
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Awe`,
  flavorText: `You project psionic energy out to a creature and take on a new visage in their mind.`,
  resourceCost: 3,
  keywords: `Psionic, Ranged, Strike, Telepathy`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Presence`,
  tier1Effect: `3 + P psychic damage; I < WEAK, frightened (save ends)`,
  tier2Effect: `6 + P psychic damage; I < AVERAGE, frightened (save ends)`,
  tier3Effect: `9 + P psychic damage; I < STRONG, frightened (save ends)`,
  effect: `If you target an ally, they gain temporary Stamina equal to three times your Presence score, and they can end one effect on them that is ended by a saving throw or that ends at the end of their turn. If you target an enemy, you make a power roll.`,
});

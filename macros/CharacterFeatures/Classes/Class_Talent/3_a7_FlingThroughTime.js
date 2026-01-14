//@id=n1j9TmzpqL3RGdQS
//@name=Fling Through Time
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Fling Through Time`,
  flavorText: `You hurl the target through the annals of time, forcing them to witness every moment of their existence all at once.`,
  resourceCost: 7,
  keywords: `Chronopathy, Psionic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Presence`,
  tier1Effect: `3 + P corruption damage; P < WEAK, weakened (save ends)`,
  tier2Effect: `5 + P corruption damage; the target is flung through time, and if P < AVERAGE, they are weakened (save ends)`,
  tier3Effect: `8 + P corruption damage; the target is flung through time, and if P < STRONG, they are weakened (save ends)`,
  effect: `A target who is flung through time is removed from the encounter map until the end of their next turn, reappearing in their original space or the nearest unoccupied space.`,
  strainedEffect: `You take 2d6 damage and permanently grow visibly older (the equivalent of 10 years for a human). If you obtain a tier 3 outcome on the power roll, you gain 2 clarity.`,
  onStrainedFunc: async function(rollResult) {
    if (rollResult.tier === 3)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `resource`, value: 2, isDelta: true });
  },
});

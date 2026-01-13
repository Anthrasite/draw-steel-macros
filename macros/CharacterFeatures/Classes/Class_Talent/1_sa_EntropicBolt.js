//@id=RZiy0oBrKVDXSmNW
//@name=Entropic Bolt
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Entropic Bolt`,
  flavorText: `You advance an enemy’s age for a moment.`,
  keywords: `Chronopathy, Psionic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Presence`,
  tier1Effect: `2 + P corruption damage; P < WEAK, slowed (save ends)`,
  tier2Effect: `3 + P corruption damage; P < AVERAGE, slowed (save ends)`,
  tier3Effect: `5 + P corruption damage; P < STRONG, slowed (save ends)`,
  effect: `The target takes an extra 1 corruption damage for each additional time they are targeted by this ability during the encounter.`,
  strainedEffect: `You gain 1 clarity when you obtain a tier 2 or tier 3 outcome on the power roll.`,
  getExtraDamageFunc: async function(rollResult) {
    const timesTargeted = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Times targeted`, label: `Times targeted by this ability`, allowNegative: false, defaultValue: 1 }));
    return timesTargeted > 1 ? ` + ${timesTargeted - 1}` : undefined;
  },
  onStrainedFunc: async function(rollResult) {
    if (rollResult.tier >= 2)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `resource`, value: 1, isDelta: true });
  },
});

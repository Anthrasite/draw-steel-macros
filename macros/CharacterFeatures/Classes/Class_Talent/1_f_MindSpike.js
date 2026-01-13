//@id=5OhRw1fyA3sQGmBF
//@name=Mind Spike
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Mind Spike`,
  flavorText: `A telepathic bolt instantly zaps a creature’s brain.`,
  keywords: `Psionic, Ranged, Strike, Telepathy`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Reason`,
  tier1Effect: `2 + R psychic damage`,
  tier2Effect: `4 + R psychic damage`,
  tier3Effect: `6 + R psychic damage`,
  strainedEffect: `The target takes an extra 2 psychic damage. You also take 2 psychic damage that can’t be reduced in any way.`,
  onStrainedFunc: async function(rollResult) {
    const roll = await new Roll(`2`).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Psychic damage`
    });
  },
});

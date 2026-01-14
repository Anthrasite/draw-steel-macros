//@id=nPBf7hSc3T2HzJNv
//@name=Force Orbs
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Force Orbs`,
  flavorText: `Spheres of solid psionic energy float around you.`,
  resourceCost: 7,
  keywords: `Psionic, Ranged, Strike, Telekinesis`,
  type: `Main action`,
  distance: `Self; see below`,
  target: `Self`,
  powerRollStat: `Reason`,
  tier1Effect: `2 damage`,
  tier2Effect: `3 damage`,
  tier3Effect: `5 damage`,
  effect: `<p>You create three size 1T orbs that orbit your body. Each orb gives you a cumulative damage immunity 1. Each time you take damage, you lose 1 orb.</p>
    <p>Once on each of your turns, you can use a free maneuver to fire an orb at a creature or object within 5 squares as a ranged strike, losing the orb after the strike.</p>`,
  strainedEffect: `You create five orbs, and you are weakened while you have any orbs active.`,
});

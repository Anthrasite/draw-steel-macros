//@id=dPHKEvObBYUymRs9
//@name=Synaptic Override
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Synaptic Override`,
  flavorText: `You control an enemy’s nervous system. How pleasant for them.`,
  resourceCost: 5,
  keywords: `Psionic, Ranged, Telepathy`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One enemy`,
  powerRollStat: `Reason`,
  tier1Effect: `The target makes a free strike against one enemy of your choice.`,
  tier2Effect: `The target shifts up to their speed and uses their signature ability against any enemies of your choice.`,
  tier3Effect: `The target moves up to their speed and uses their signature ability against any enemies of your choice.`,
  effect: `You control the target’s movement. The target can’t be moved in a way that would harm them (such as over a cliff), leave them dying, or result in them suffering a condition or other negative effect. However, you can move them to provoke opportunity attacks.`,
  strainedEffect: `You take 1d6 damage and are weakened until the end of your turn.`,
});

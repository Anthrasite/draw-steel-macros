//@id=vIY8i0pMwnfO5tJ6
//@name=Kinetic Grip
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Kinetic Grip`,
  flavorText: `You lift and hurl your foe away from you.`,
  keywords: `Psionic, Ranged, Telekinesis`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Reason`,
  tier1Effect: `Slide 2 + R`,
  tier2Effect: `Slide 4 + R`,
  tier3Effect: `Slide 6 + R; prone`,
  strainedEffect: `You must vertical push the target instead of sliding them.`,
});

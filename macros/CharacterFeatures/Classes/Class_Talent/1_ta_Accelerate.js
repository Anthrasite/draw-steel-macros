//@id=FIuYGxSyfHvrmPcT
//@name=Accelerate
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Accelerate`,
  flavorText: `To your ally, it seems as though the world has slowed down.`,
  keywords: `Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self or one creature`,
  effect: `The target shifts up to a number of squares equal to your Reason score.`,
  extraResourceCost: `2`,
  extraResourceEffect: `The target can use a maneuver.`,
});

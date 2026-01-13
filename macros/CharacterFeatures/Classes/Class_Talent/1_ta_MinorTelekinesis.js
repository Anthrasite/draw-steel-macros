//@id=TE0lbVNOZ5eLwqyM
//@name=Minor Telekinesis
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Minor Telekinesis`,
  flavorText: `Wisps of psychic energy ripple visibly from your brain as you force the target to move using only your mind.`,
  keywords: `Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self or one size 1 creature or object`,
  effect: `You slide the target up to a number of squares equal to your Reason score.`,
  extraResourceCost: `2+`,
  extraResourceEffect: `The size of the creature or object you can target increases by 1 for every 2 clarity spent.`,
  extraResourceCost2: `3`,
  extraResourceEffect2: `You can vertical slide the target.`,
});

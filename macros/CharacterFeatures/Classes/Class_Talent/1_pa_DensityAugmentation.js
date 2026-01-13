//@id=3R8Ksa1kbgEzD7yp
//@name=Density Augmentation
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Density Augmentation`,
  description: `You gain a +6 bonus to Stamina, and this bonus increases by 6 at 4th, 7th, and 10th levels. Additionally, you gain a +1 bonus to stability.`,
  source: `Class`,
});

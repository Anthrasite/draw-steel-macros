//@id=IVFKmdMtic21AHf3
//@name=Ease the Hours
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Ease the Hours`,
  description: `You can increase the number of rounds in a montage test by 1 if the test would end before the heroes hit the success limit.`,
  source: `Class`,
});

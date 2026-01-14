//@id=VX1HGNba6Izgr3mC
//@name=Ease Their Fall
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Ease Their Fall`,
  description: `Whenever you land after a fall, or if any falling creature lands within 2 squares of you, you can use a free triggered action to reduce the falling damage by an amount equal to 2 + your Reason score.`,
  source: `Class`,
});

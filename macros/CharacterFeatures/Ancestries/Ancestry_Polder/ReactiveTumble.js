//@id=RiU4TDu6OGb90vME
//@name=Reactive Tumble
//@img=icons/magic/light/orbs-hand-gray.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Reactive Tumble`,
  description: `Staying light on your feet lets you quickly get back into position. Whenever you are force moved, you can use a free triggered action to shift 1 square after the forced movement is resolved.`,
  source: `Ancestry`,
});

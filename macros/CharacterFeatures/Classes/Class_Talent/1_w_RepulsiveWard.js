//@id=hzJwcE47WvlFRUgu
//@name=Repulsive Ward
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Repulsive Ward`,
  description: `You surround yourself with an invisible ward of telekinetic energy. Whenever an adjacent creature deals damage to you, you can use a free triggered action to push them up to a number of squares equal to your Reason score.`,
  source: `Class`,
});

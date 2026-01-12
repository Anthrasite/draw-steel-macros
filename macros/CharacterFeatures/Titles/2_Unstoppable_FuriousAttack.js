//@id=8qK1xr56nM9ZTLbe
//@name=Unstoppable - Furious Attack
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Unstoppable - Furious Attack`,
  description: `Choose one signature ability from the fury class. You gain that ability regardless of whether your class and subclass allow you to take it. If this ability allows you to gain or spend ferocity, you can’t do so unless you have the Ferocity class feature.`,
  source: `Title`,
});

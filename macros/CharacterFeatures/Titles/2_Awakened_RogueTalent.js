//@id=wtMIqk6E4uFocrP1
//@name=Awakened - Rogue Talent
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Awakened - Rogue Talent`,
  description: `Choose one triggered action that the talent class has access to at 1st level. You gain that ability regardless of whether your class and subclass allow you to take it. If this ability allows you to gain or spend clarity, you can’t do so unless you have the Clarity class feature.`,
  source: `Title`,
});

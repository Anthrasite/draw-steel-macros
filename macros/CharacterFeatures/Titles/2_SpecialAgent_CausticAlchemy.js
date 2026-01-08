//@id=STejDGsXZkU1cnyQ
//@name=Special Agent - Caustic Alchemy
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Special Agent - Caustic Alchemy",
  description: `You have your choice of the 1st-level shadow college features Coat the Blade or Smoke Bomb. When you use that feature, you can’t spend insight unless you have the Insight class feature.`,
  source: "Title"
});

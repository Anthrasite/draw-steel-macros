//@id=Y2X3kfmZvOJV90hw
//@name=Local Hero - Local Fame
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Local Hero - Local Fame",
  description: `You earn 1 Renown.`,
  source: "Title"
});

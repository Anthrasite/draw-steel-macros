//@id=Y2X3kfmZvOJV90hw
//@name=Local Fame
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Local Fame",
  description: `You earn 1 Renown.`,
  source: "Title"
});

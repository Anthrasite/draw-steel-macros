//@id=2f7sFkhRSGvWbcDm
//@name=Oh No, You Don’t!
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Oh No, You Don’t!",
  description: `Whenever an adjacent creature uses an ability with the Magic keyword, you can make a free strike against them as a triggered action.`,
  source: "Title"
});

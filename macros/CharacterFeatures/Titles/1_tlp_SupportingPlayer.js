//@id=UjVNJnwgxLXs9Te8
//@name=Supporting Player
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Supporting Player",
  description: `You gain an edge on group tests using Presence and on tests made to assist another creature with a Presence test.`,
  source: "Title"
});

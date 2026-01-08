//@id=ZVWJhubz8ijGgKns
//@name=Fey Friend - Gift of Knowledge
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Fey Friend - Gift of Knowledge",
  description: `You know the Khelt language. You gain an edge on tests you make that use any skill from the lore skill group.`,
  source: "Title"
});

//@id=feKVyBJCvulkrzOh
//@name=Headbutt
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Headbutt",
  description: `While you are grabbed or restrained, your free strikes don’t take a bane when those conditions would impose one.`,
  source: "Title"
});

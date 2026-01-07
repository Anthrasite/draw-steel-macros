//@id=mNhzEksAgiM28fZ6
//@name=Honor Among Thieves
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Honor Among Thieves",
  description: `When negotiating with criminals, your Renown score is considered to be 2 higher than usual.`,
  source: "Title"
});

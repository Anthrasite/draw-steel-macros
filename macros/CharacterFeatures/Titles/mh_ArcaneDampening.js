//@id=ROp3PrXJsdSYl1HZ
//@name=Arcane Dampening
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Arcane Dampening",
  description: `When resisting potencies from magic abilities, your characteristic scores are considered to be 1 higher than usual.`,
  source: "Title"
});

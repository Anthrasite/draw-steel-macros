//@id=kYzFNtSrOQgU4aT0
//@name=Dwarven Legionnaire - Close Formation
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Dwarven Legionnaire - Close Formation",
  description: `While adjacent to two or more allies, you gain a +2 bonus to stability.`,
  source: "Title"
});

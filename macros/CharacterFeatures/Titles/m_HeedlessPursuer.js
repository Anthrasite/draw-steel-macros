//@id=MV9d1FrzANGcYX0k
//@name=Heedless Pursuer
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Heedless Pursuer",
  description: `Once on each of your turns, you can use a free maneuver to deal yourself 1d6 damage that can’t be reduced in any way. When you do, you ignore difficult terrain and you can increase the distance of any jump you make by 1 square, both until the end of your turn.`,
  source: "Title"
});

//@id=jhi8Ym1cowIbxtUg
//@name=Marshal - Guess It’s the Hard Way Then
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Marshal - Guess It’s the Hard Way Then",
  description: `When combat begins and you aren’t surprised, the first time you take damage before taking your turn, you halve that damage.`,
  source: "Title"
});

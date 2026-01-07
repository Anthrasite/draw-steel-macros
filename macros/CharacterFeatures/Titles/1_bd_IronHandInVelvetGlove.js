//@id=5ka2rJ3Q9yPslKjO
//@name=Iron Hand in Velvet Glove
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Iron Hand in Velvet Glove",
  description: `The first time during a negotiation that you make a test using the Intimidate skill and don’t make an argument that appeals to an NPC’s motivation, you don’t lower the NPC’s patience or interest no matter the outcome of the roll.`,
  source: "Title"
});

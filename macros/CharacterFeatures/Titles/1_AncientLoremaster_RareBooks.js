//@id=GqNIVmMKnQybdjPE
//@name=Ancient Loremaster - Rare Books
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Ancient Loremaster - Rare Books",
  description: `You add rare, ancient books to your collection. Whenever you undertake a research project, roll 1d6 for each dead language you know and add the total to the project roll.`,
  source: "Title"
});

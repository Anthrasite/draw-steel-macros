//@id=GqNIVmMKnQybdjPE
//@name=Rare Books
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Rare Books",
  description: `You add rare, ancient books to your collection. Whenever you undertake a research project, roll 1d6 for each dead language you know and add the total to the project roll.`,
  source: "Title"
});

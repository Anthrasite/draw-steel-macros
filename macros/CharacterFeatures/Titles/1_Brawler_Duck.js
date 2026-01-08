//@id=pOCxAMGRTB7HQahy
//@name=Brawler - Duck!
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Brawler - Duck!",
  description: `When an enemy strikes you while a second creature is flanking you, you can use a triggered action to redirect the strike against the second creature. Once you use this benefit, you can’t use it again until you earn 1 or more Victories.`,
  source: "Title"
});

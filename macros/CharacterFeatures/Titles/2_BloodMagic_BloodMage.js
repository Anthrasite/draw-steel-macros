//@id=l2FV5sd6vowbIcpX
//@name=Blood Magic - Blood Mage
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Blood Magic - Blood Mage",
  description: `When you use an area ability with the Magic or Psionic keyword, you can take damage equal to your level to increase the ability’s area by 1 until the end of the encounter. If the area is a line, you increase the size of one dimension, not both. This damage can’t be reduced in any way. You can use this benefit only once per use of an ability.`,
  source: "Title"
});

//@id=wrIHUCyo1u82dngh
//@name=Judgment’s Hammer
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Judgment’s Hammer",
  resourceCost: 3,
  flavorText: "Your divine fury is a hammer that crashes down upon the unrighteous.",
  keywords: "Magic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Intuition",
  tier1Effect: "3 + I holy damage; A < WEAK, prone",
  tier2Effect: "6 + I holy damage; A < AVERAGE, prone",
  tier3Effect: "9 + I holy damage; A < STRONG, prone and can’t stand (save ends)"
});

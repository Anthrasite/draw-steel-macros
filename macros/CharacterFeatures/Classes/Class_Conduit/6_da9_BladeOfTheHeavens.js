//@id=bW5GfTFXJic804x7
//@name=Blade of the Heavens
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Blade of the Heavens",
  resourceCost: 9,
  flavorText: "A greatsword streams down from the sky, threatening to pin your foe.",
  keywords: "Magic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 5",
  target: "One creature",
  powerRollStat: "Intuition",
  tier1Effect: "8 + I damage; A < WEAK, prone and restrained (save ends)",
  tier2Effect: "12 + I damage; A < AVERAGE, prone and restrained (save ends)",
  tier3Effect: "16 + I damage; A < STRONG, prone and restrained (save ends)"
});

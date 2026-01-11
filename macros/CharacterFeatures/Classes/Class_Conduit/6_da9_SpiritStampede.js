//@id=H2snpu3ahGQWcolK
//@name=Spirit Stampede
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Spirit Stampede",
  resourceCost: 9,
  flavorText: "Animal spirits run through the battlefield, trampling your foes.",
  keywords: "Area, Magic, Ranged",
  type: "Main action",
  distance: "10 × 2 line within 5",
  target: "Each enemy in the area",
  powerRollStat: "Intuition",
  tier1Effect: "5 damage; M < WEAK, prone and can’t stand (save ends)",
  tier2Effect: "8 damage; M < AVERAGE, prone and can’t stand (save ends)",
  tier3Effect: "11 damage; M < STRONG, prone and can’t stand (save ends)"
});

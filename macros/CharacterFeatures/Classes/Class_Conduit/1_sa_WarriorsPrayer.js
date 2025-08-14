//@id=nyLAaMe0gWktpHPb
//@name=Warrior’s Prayer
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Warrior’s Prayer",
  flavorText: "Your quickly uttered prayer lends aggressive divine energy to a friend engaged in melee.",
  keywords: "Magic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Intuition",
  tier1Effect: "3 + I holy damage",
  tier2Effect: "6 + I holy damage",
  tier3Effect: "9 + I holy damage",
  effect: "You or one ally within distance gains temporary Stamina equal to your Intuition score"
});

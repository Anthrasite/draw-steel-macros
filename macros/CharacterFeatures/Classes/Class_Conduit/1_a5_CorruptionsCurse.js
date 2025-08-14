//@id=GISeLaU40Pp9KDsn
//@name=Corruption’s Curse
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Corruption’s Curse",
  resourceCost: 5,
  flavorText: "Cursed by you, your enemy takes more damage from your allies.",
  keywords: "Magic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Intuition",
  tier1Effect: "3 + I corruption damage; M < WEAK, damage weakness 5 (save ends)",
  tier2Effect: "6 + I corruption damage; M < AVERAGE, damage weakness 5 (save ends)",
  tier3Effect: "9 + I corruption damage; M < STRONG, damage weakness 5 (save ends)"
});

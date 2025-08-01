//@id=ZVGoyN6fhM1AwHap
//@name=Eviscerate
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Eviscerate",
  flavorText: "You leave your foe bleeding out after a devastating attack.",
  resourceCost: 3,
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "4 + A damage; A < WEAK, bleeding (save ends)",
  tier2Effect: "6 + A damage; A < AVERAGE, bleeding (save ends)",
  tier3Effect: "10 + A damage; A < STRONG, bleeding (save ends)"
});

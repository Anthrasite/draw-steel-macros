//@id=cv8XCYHAVsRqF9Kt
//@name=Curse of Terror
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Curse of Terror`,
  resourceCost: 5,
  flavorText: `Fear of divine judgment overwhelms your foe.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Intuition`,
  tier1Effect: `6 + I holy damage; I < WEAK, frightened (save ends)`,
  tier2Effect: `9 + I holy damage; I < AVERAGE, frightened (save ends)`,
  tier3Effect: `13 + I holy damage; I < STRONG, frightened (save ends)`,
});

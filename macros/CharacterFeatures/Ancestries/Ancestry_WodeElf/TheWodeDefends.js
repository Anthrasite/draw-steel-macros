//@id=Z2KCi3rX5ogNA6MB
//@name=The Wode Defends
//@img=icons/magic/nature/tree-twisted-glow-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `The Wode Defends`,
  flavorText: `Thorny vines erupt from every surface and attempt to bind your foe.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Might or Agility`,
  tier1Effect: `2 + M or A damage; A < WEAK, slowed (save ends)`,
  tier2Effect: `3 + M or A damage; A < AVERAGE, slowed (save ends)`,
  tier3Effect: `5 + M or A damage; A < STRONG, restrained (save ends)`,
});

//@id=mPlgNzD3LHWMtTYw
//@name=Stink Bomb
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Stink Bomb`,
  flavorText: `Putrid yellow gas explodes from a bomb you toss.`,
  resourceCost: 5,
  keywords: `Area, Ranged`,
  type: `Main action`,
  distance: `3 cube within 10`,
  target: `Each creature in the area`,
  powerRollStat: `Agility`,
  tier1Effect: `2 poison damage`,
  tier2Effect: `5 poison damage`,
  tier3Effect: `7 poison damage`,
  effect: `The gas remains in the area until the end of the encounter. Any creature who starts their turn in the area and has M < AVERAGE is weakened (save ends).`,
});

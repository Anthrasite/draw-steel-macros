//@id=N2eZYt4QXAopzdgM
//@name=Holy Lash
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Holy Lash`,
  flavorText: `A tendril of divine energy shoots forth to draw in your foe.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Intuition`,
  tier1Effect: `3 + I holy damage; vertical pull 2`,
  tier2Effect: `5 + I holy damage; vertical pull 3`,
  tier3Effect: `8 + I holy damage; vertical pull 4`,
});

//@id=n5gRuicL3K7Atpm2
//@name=Staggering Curse
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Staggering Curse`,
  flavorText: `A blast of judgment disorients your foe.`,
  keywords: `Magic, Melee, Strike`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Intuition`,
  tier1Effect: `3 + I holy damage; slide 1`,
  tier2Effect: `5 + I holy damage; slide 2`,
  tier3Effect: `8 + I holy damage; slide 3`,
});

//@id=MjXfgE1TlQ78IGUe
//@name=Invocation of Undoing
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Invocation of Undoing`,
  resourceCost: 9,
  flavorText: `You utter a secret word of destruction known only to deities.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `4 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Intuition`,
  tier1Effect: `3 sonic damage; push 3`,
  tier2Effect: `6 sonic damage; push 5`,
  tier3Effect: `9 sonic damage; push 7`,
  effect: `You can choose to have this ability deal damage to and push objects, and to deal damage to buildings.`,
});

//@id=ZrXTnQO7JA5KHkjm
//@name=Saint’s Tempest
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Saint’s Tempest`,
  resourceCost: 5,
  flavorText: `A raging storm appears, striking your foes with lightning and throwing them around with wind.`,
  keywords: `Area, Magic, Ranged`,
  type: `Main action`,
  distance: `3 cube within 10`,
  target: `Each enemy in the area`,
  powerRollStat: `Intuition`,
  tier1Effect: `2 lightning damage; vertical slide 1`,
  tier2Effect: `5 lightning damage; vertical slide 2`,
  tier3Effect: `7 lightning damage; vertical slide 3`,
});

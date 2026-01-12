//@id=iSwkH98sx2hbAC5m
//@name=Call the Thunder Down
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Call the Thunder Down`,
  resourceCost: 3,
  flavorText: `You ask your saint for thunder and your prayer is answered.`,
  keywords: `Area, Magic, Ranged`,
  type: `Main action`,
  distance: `3 cube within 10`,
  target: `Each enemy in the area`,
  powerRollStat: `Intuition`,
  tier1Effect: `2 sonic damage; push 1`,
  tier2Effect: `3 sonic damage; push 2`,
  tier3Effect: `5 sonic damage; push 3`,
  effect: `You can push each willing ally in the area the same distance, ignoring stability.`,
});

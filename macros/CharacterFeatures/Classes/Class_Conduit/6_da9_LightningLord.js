//@id=vhbSC2GAaRN8uP3Y
//@name=Lightning Lord
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Lightning Lord`,
  resourceCost: 9,
  flavorText: `Lightning bursts forth from your body in several directions.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `Three 10 × 1 lines within 1`,
  target: `Each enemy in the area`,
  powerRollStat: `Intuition`,
  tier1Effect: `6 lightning damage; push 1`,
  tier2Effect: `9 lightning damage; push 2`,
  tier3Effect: `13 lightning damage; push 3`,
  effect: `The targets are force moved one at a time, starting with the target nearest to you, and can be pushed into other targets in the same line.`,
});

//@id=HiesvalKgjfTGRBO
//@name=Nature Judges Thee
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Nature Judges Thee`,
  resourceCost: 5,
  flavorText: `Mystical thorned vines appear at your bidding and bind your foes.`,
  keywords: `Area, Magic, Ranged`,
  type: `Main action`,
  distance: `3 cube within 10`,
  target: `Each enemy in the area`,
  powerRollStat: `Intuition`,
  tier1Effect: `2 damage; A < WEAK, restrained (save ends)`,
  tier2Effect: `3 damage; A < AVERAGE, restrained (save ends)`,
  tier3Effect: `7 damage; A < STRONG, restrained (save ends)`,
});

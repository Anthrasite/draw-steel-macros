//@id=8XtLQeh1ksOmr3Sl
//@name=Penance
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Penance`,
  resourceCost: 9,
  flavorText: `“If you won’t kneel, the gods will make you.”`,
  keywords: `Area, Magic, Ranged`,
  type: `Main action`,
  distance: `4 cube within 10`,
  target: `Each enemy in the area`,
  powerRollStat: `Intuition`,
  tier1Effect: `4 corruption damage; I < WEAK, prone and can’t stand (save ends)`,
  tier2Effect: `7 corruption damage; I < AVERAGE, prone and can’t stand (save ends)`,
  tier3Effect: `11 corruption damage; I < STRONG, prone and can’t stand (save ends)`,
});

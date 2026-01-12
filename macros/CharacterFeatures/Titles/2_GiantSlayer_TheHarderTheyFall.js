//@id=EOQNqJf2beaHKjAo
//@name=Giant Slayer - The Harder They Fall
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Giant Slayer - The Harder They Fall`,
  flavorText: `Timber!`,
  resourceCost: 7,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Might or Agility`,
  tier1Effect: `7 damage; M < WEAK, prone and can’t stand (save ends)`,
  tier2Effect: `11 damage; M < AVERAGE, prone and can’t stand (save ends)`,
  tier3Effect: `16 damage; M < STRONG, prone and can’t stand (save ends)`,
  effect: `If the target is size 2 or larger, you gain an edge on this ability.`,
});

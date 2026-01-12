//@id=GnQgcplyTCm7xij5
//@name=Arena Fighter - Showstopper
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Arena Fighter - Showstopper`,
  flavorText: `Show’s over, kids!`,
  resourceCost: 5,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Might or Agility`,
  tier1Effect: `6 damage; I < WEAK, slowed (save ends)`,
  tier2Effect: `10 damage; I < AVERAGE, frightened (save ends)`,
  tier3Effect: `14 damage; I < STRONG, dazed (save ends)`,
  effect: `If you kill a non-minion opponent using this ability, each enemy within 3 squares of you is frightened (save ends).`,
});

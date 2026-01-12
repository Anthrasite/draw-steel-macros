//@id=EkQ13ywG9x8KDAVh
//@name=Knight - Knightly Challenge
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Knight - Knightly Challenge`,
  flavorText: `Have at thee!`,
  resourceCost: 5,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Might or Agility`,
  tier1Effect: `7 damage; taunted (save ends)`,
  tier2Effect: `11 damage; taunted (save ends)`,
  tier3Effect: `16 damage; taunted (save ends)`,
  effect: `You can end the taunted condition on the target as a free maneuver.`,
});

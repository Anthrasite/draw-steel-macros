//@id=YyFlt95PSN1aAwRE
//@name=Mind Game
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Mind Game`,
  flavorText: `Your attack demoralizes your foe. Your allies begin to think you can win.`,
  resourceCost: 5,
  keywords: `Melee, Ranged, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1 or ranged 5`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `4 + M damage; R < WEAK, weakened (save ends)`,
  tier2Effect: `6 + M damage; R < AVERAGE, weakened (save ends)`,
  tier3Effect: `10 + M damage; R < STRONG, weakened (save ends)`,
  effect: `You mark the target before making the power roll. Before the start of your next turn, the first time any ally deals damage to any target marked by you, that ally can spend a Recovery.`,
});

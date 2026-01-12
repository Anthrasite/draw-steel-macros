//@id=3JyvA6rTRB54CIsm
//@name=Stone Eyes
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Stone Eyes`,
  flavorText: `Your looks don’t kill—they petrify.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Might or Presence`,
  tier1Effect: `2 damage; M < WEAK, slowed (save ends)`,
  tier2Effect: `4 damage; M < AVERAGE, slowed (save ends)`,
  tier3Effect: `6 damage; M < STRONG, slowed (save ends)`,
  effect: `This ability has no effect on a creature who can’t see you or who purposefully avoids looking at your eyes. A creature reduced to 0 Stamina by this ability is turned to inanimate stone.`,
});

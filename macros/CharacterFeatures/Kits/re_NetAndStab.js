//@id=TMr2h7lRbHjtzFmw
//@name=Net and Stab
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Net and Stab`,
  flavorText: `The well-thrown net that follows your main attack leaves your foes right where you want them.`,
  keywords: `Melee, Strike, Weapon`,
  isKit: true,
  type: `Main action`,
  distance: `Melee 2`,
  target: `One creature`,
  powerRollStat: `Might or Agility`,
  tier1Effect: `4 + M or A damage; A < WEAK, slowed (EoT)`,
  tier2Effect: `6 + M or A damage; A < AVERAGE, slowed (EoT)`,
  tier3Effect: `8 + M or A damage; A < STRONG, restrained (EoT)`,
});

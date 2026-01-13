//@id=BtD7Uk28wrEIKjzZ
//@name=Apex Predator
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Apex Predator`,
  resourceCost: 5,
  flavorText: `I will hunt you down.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Might`,
  tier1Effect: `4 + M damage; I < WEAK, slowed (save ends)`,
  tier2Effect: `6 + M damage; I < AVERAGE, slowed (save ends)`,
  tier3Effect: `10 + M damage; I < STRONG, slowed (save ends)`,
  effect: `The target can’t be hidden from you for 24 hours. Until the end of the encounter, whenever the target willingly moves, you can use a free triggered action to move.`,
});

//@id=ruadh84TfgV15eio
//@name=Panic in Their Lines
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Panic in Their Lines`,
  flavorText: `You confuse your foes, causing them to turn on each other.`,
  resourceCost: 9,
  keywords: `Melee, Ranged, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1 or ranged 5`,
  target: `Two creatures`,
  powerRollStat: `Might`,
  tier1Effect: `6 + M damage; slide 1`,
  tier2Effect: `9 + M damage; slide 3`,
  tier3Effect: `13 + M damage; slide 5`,
  effect: `If a target is force moved into another creature, they must make a free strike against that creature.`
});

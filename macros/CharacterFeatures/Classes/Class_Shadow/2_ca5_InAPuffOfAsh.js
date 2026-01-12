//@id=oZOilUk1tFJaVWuI
//@name=In a Puff of Ash
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `In a Puff of Ash`,
  flavorText: `You enchant a strike with your teleportation magic.`,
  resourceCost: 5,
  keywords: `Magic, Melee, Ranged, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1 or ranged 5`,
  target: `One creature`,
  powerRollStat: `Agility`,
  tier1Effect: `6 + A damage; you can teleport the target 1 square`,
  tier2Effect: `10 + A damage; you can teleport the target up to 3 squares`,
  tier3Effect: `14 + A damage; you can teleport the target up to 5 squares`,
});

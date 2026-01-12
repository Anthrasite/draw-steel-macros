//@id=kbMVK8gSAe1Xr3IE
//@name=Try Me Instead
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Try Me Instead`,
  flavorText: `“Try picking on someone my size.”`,
  resourceCost: 5,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Self; see below`,
  target: `Self`,
  powerRollStat: `Reason`,
  tier1Effect: `2 + R damage; R < WEAK, frightened (save ends)`,
  tier2Effect: `3 + R damage; R < AVERAGE, frightened (save ends)`,
  tier3Effect: `4 + R damage; R < STRONG, frightened (save ends)`,
  effect: `You shift up to your speed directly toward an ally, ending adjacent to them, then swapping locations with that ally as long as you can fit into each other’s spaces. The ally can spend a Recovery, and you can make this weapon strike with a distance of melee 1 against a creature.`
});

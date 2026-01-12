//@id=yf7NS0b9eIwlOukh
//@name=Concussive Strike
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Concussive Strike`,
  flavorText: `Your precise strike leaves your foe struggling to respond.`,
  resourceCost: 3,
  keywords: `Melee, Ranged, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1 or ranged 5`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `3 + M damage; M < WEAK, dazed (save ends)`,
  tier2Effect: `5 + M damage; M < AVERAGE, dazed (save ends)`,
  tier3Effect: `8 + M damage; M < STRONG, dazed (save ends)`,
});

//@id=oWjyD0HaKngTm3M9
//@name=Infernal Gavotte
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Infernal Gavotte`,
  resourceCost: 7,
  flavorText: `A spicy performance lights a fire under your allies’ feet.`,
  keywords: `Area, Magic, Melee, Weapon`,
  type: `Main action`,
  distance: `3 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Presence`,
  tier1Effect: `5 fire damage; A < WEAK, weakened (save ends)`,
  tier2Effect: `7 fire damage; A < AVERAGE, weakened (save ends)`,
  tier3Effect: `10 fire damage; A < STRONG, weakened (save ends)`,
  effect: `Each ally in the area can shift up to 2 squares.`,
});

//@id=ZRtbJTInMeAgPch8
//@name=Maestro - The Devil’s Chord
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Maestro - The Devil’s Chord`,
  flavorText: `Helloooo Orden!`,
  resourceCost: 9,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `5 burst`,
  target: `Each creature in the area`,
  powerRollStat: `Presence`,
  tier1Effect: `You take 4 sonic damage unless you have the Performance skill.`,
  tier2Effect: `6 sonic damage; M < AVERAGE, weakened (save ends)`,
  tier3Effect: `10 sonic damage; M < STRONG, weakened and bleeding (save ends)`,
  effect: `The soul of any creature killed by this ability is dragged to Hell.`,
});

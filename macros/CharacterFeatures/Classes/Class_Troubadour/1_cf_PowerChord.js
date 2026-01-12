//@id=UfyMCPHbGnr8xok3
//@name=Power Chord
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Power Chord`,
  flavorText: `Your instrument rings true and your music blows everyone away.`,
  keywords: `Area, Magic`,
  type: `Maneuver`,
  distance: `2 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Presence`,
  tier1Effect: `Push 1`,
  tier2Effect: `Push 2`,
  tier3Effect: `Push 3`,
});

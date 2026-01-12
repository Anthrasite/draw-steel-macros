//@id=kKWO6HbePnTIyMVh
//@name=Hypnotic Overtones
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hypnotic Overtones`,
  resourceCost: 3,
  flavorText: `You produce an entrancing note that twists the senses in a spectacular fashion.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `2 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Presence`,
  tier1Effect: `Slide 1; I < WEAK, dazed (save ends)`,
  tier2Effect: `Slide 1; I < AVERAGE, dazed (save ends)`,
  tier3Effect: `Slide 2; I < STRONG, dazed (save ends)`,
  extraResourceCost: `2+`,
  extraResourceEffect: `The size of the burst increases by 1 for every 2 drama spent.`,
});

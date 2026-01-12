//@id=CmE8g2WNRiOBoc7D
//@name=Upstage
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Upstage",
  resourceCost: 3,
  flavorText: "As you bob and weave through the crowd, you can’t help but leave the audience wanting more.",
  keywords: "Melee, Strike, Weapon",
  type: "Maneuver",
  distance: "Self; see below",
  target: "Self",
  powerRollStat: "Agility or Presence",
  tier1Effect: "Taunted (EoT); A < WEAK, prone",
  tier2Effect: "Taunted (EoT); A < AVERAGE, prone",
  tier3Effect: "Taunted (EoT); A < STRONG, prone and can’t stand (EoT)",
  effect: "You shift up to your speed. You make one power roll that targets each enemy you move adjacent to during this shift.",
});

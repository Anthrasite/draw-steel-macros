//@id=fbBPpaTjtID0syUR
//@name=Gravitic Burst
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Gravitic Burst`,
  flavorText: `Everyone get away from me!`,
  resourceCost: 5,
  keywords: `Area, Psionic, Telekinesis`,
  type: `Main action`,
  distance: `1 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Reason`,
  tier1Effect: `3 damage; vertical push 2`,
  tier2Effect: `6 damage; vertical push 4`,
  tier3Effect: `9 damage; vertical push 6`,
  strainedEffect: `The size of the burst increases by 1, and you are weakened until the end of your turn.`,
});

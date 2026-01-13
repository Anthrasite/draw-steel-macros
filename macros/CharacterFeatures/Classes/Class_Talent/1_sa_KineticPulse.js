//@id=rWlJv0nCk3daPmqQ
//@name=Kinetic Pulse
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Kinetic Pulse`,
  flavorText: `The force of your mind hurls enemies backward.`,
  keywords: `Area, Psionic, Telepathy`,
  type: `Main action`,
  distance: `1 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Reason`,
  tier1Effect: `2 psychic damage`,
  tier2Effect: `5 psychic damage; push 1`,
  tier3Effect: `7 psychic damage; push 2`,
  strainedEffect: `The size of the burst increases by 2, and you are bleeding until the start of your next turn.`,
});

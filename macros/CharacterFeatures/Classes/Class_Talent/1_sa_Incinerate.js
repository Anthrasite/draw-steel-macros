//@id=ljm7xscybRaEip9n
//@name=Incinerate
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Incinerate`,
  flavorText: `The air erupts into a column of smokeless flame.`,
  keywords: `Area, Fire, Psionic, Pyrokinesis, Ranged`,
  type: `Main action`,
  distance: `3 cube within 10`,
  target: `Each enemy in the area`,
  powerRollStat: `Reason`,
  tier1Effect: `2 fire damage`,
  tier2Effect: `4 fire damage`,
  tier3Effect: `6 fire damage`,
  effect: `A column of fire remains in the area until the start of your next turn. Each enemy who enters the area for the first time in a combat round or starts their turn there takes 2 fire damage.`,
  strainedEffect: `The size of the cube increases by 2, but the fire disappears at the end of your turn.`,
});

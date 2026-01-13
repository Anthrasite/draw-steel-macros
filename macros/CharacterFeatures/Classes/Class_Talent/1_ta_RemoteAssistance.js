//@id=tSpzQKsHe1oE024l
//@name=Remote Assistance
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Remote Assistance`,
  flavorText: `An ally gains the benefit of your intellect.`,
  keywords: `Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  effect: `The next ability roll an ally makes against the target before the start of your next turn gains an edge.`,
  extraResourceCost: `1`,
  extraResourceEffect: `You target one additional creature or object.`,
});

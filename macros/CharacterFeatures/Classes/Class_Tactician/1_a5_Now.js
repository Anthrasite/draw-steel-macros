//@id=TJfZPz4loLdO06YD
//@name=Now!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Now!`,
  flavorText: `Your allies wait for your command—then unleash death!`,
  resourceCost: 5,
  keywords: `Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Three allies`,
  effect: `Each target can make a free strike.`,
});

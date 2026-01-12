//@id=mYIMfgGOisP2u8qF
//@name=Hustle!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hustle!`,
  flavorText: `You and your allies coordinate to form a new battle line.`,
  resourceCost: 9,
  keywords: `Area`,
  type: `Maneuver`,
  distance: `2 burst`,
  target: `Self and each ally in the area`,
  effect: `You mark two enemies within 10 squares of you. Each target can shift up to their speed. You and each target gain 2 surges.`,
  beforeRollFunc: async function() {
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 2, isDelta: true });
  },
});

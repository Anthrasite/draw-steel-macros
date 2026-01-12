//@id=tE8cR7ZeIMboAkhx
//@name=Divine Comedy
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Divine Comedy`,
  resourceCost: 5,
  flavorText: `You and your allies swap places to confound your foes.`,
  keywords: `Area, Magic`,
  type: `Maneuver`,
  distance: `5 burst`,
  target: `Self and each ally in the area`,
  effect: `Each target can choose another creature in the area, then swap places with that creature. The creature they choose must be able to fit into the space they leave and vice versa.`
});

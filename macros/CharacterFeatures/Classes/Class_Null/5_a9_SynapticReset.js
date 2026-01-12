//@id=tM6fzIQcZE1Pp92C
//@name=Synaptic Reset
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Synaptic Reset`,
  flavorText: `You expand your nullifying power to mitigate harmful effects.`,
  resourceCost: 9,
  keywords: `Area, Psionic`,
  type: `Maneuver`,
  distance: `3 burst`,
  target: `Self and each ally in the area`,
  effect: `Each target can end any conditions or effects on themself, and gains 5 temporary Stamina for each condition or effect removed.`,
});

//@id=PImeE2i71R0BSpA9
//@name=Steelbreaker
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Steelbreaker`,
  resourceCost: 7,
  flavorText: `See how useless their weapons are!`,
  keywords: `Magic`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `You gain 20 temporary Stamina.`,
  afterRollFunc: async function(rollResult) {
    await game.macros.getName(`UpdateTempStamina`).execute({ activeActor: actor, value: 20 });
  },
});

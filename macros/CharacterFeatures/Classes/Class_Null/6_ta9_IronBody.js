//@id=SM7FQWbj1VozhsTU
//@name=Iron Body
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Iron Body`,
  flavorText: `You focus until your body becomes as hard as iron.`,
  resourceCost: 9,
  keywords: `Psionic`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `You gain 20 temporary Stamina. Additionally, until the end of the encounter, your stability gains a bonus equal to your Intuition score.`,
  afterRollFunc: async function(rollResult) {
    await game.macros.getName(`UpdateTempStamina`).execute({ activeActor: actor, value: 20 });
  },
});

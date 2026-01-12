//@id=bKp5LkVor7hvDOR8
//@name=Squad! On Me!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Squad! On Me!`,
  flavorText: `Together we are invincible!`,
  resourceCost: 5,
  keywords: `Area`,
  type: `Maneuver`,
  distance: `1 burst`,
  target: `Self and each ally in the area`,
  effect: `Until the start of your next turn, each target has a bonus to stability equal to your Might score. Additionally, each target gains 2 surges.`,
  beforeRollFunc: async function() {
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 2, isDelta: true });
  },
});

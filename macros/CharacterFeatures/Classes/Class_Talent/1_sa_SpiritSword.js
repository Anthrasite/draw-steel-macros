//@id=UV5fuqpO3W4Bhsjx
//@name=Spirit Sword
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Spirit Sword`,
  flavorText: `You form a blade of mind energy and stab your target, invigorating yourself.`,
  keywords: `Animapathy, Melee, Psionic, Strike`,
  type: `Main action`,
  distance: `Melee 2`,
  target: `One creature or object`,
  powerRollStat: `Presence`,
  tier1Effect: `3 + P damage`,
  tier2Effect: `6 + P damage`,
  tier3Effect: `9 + P damage`,
  effect: `You gain 1 surge.`,
  strainedEffect: `The target takes an extra 3 damage. You also take 3 damage that can’t be reduced in any way.`,
  beforeRollFunc: async function(rollResult) {
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 1, isDelta: true });
  },
  onStrainedFunc: async function(rollResult) {
    const roll = await new Roll(`3`).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Damage`
    });
  },
});

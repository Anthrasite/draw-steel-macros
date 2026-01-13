//@id=VDkYo5BMpIehELbU
//@name=Materialize
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Materialize`,
  flavorText: `You picture an object in your mind and give it form—directly above your opponent’s head.`,
  keywords: `Psionic, Ranged, Resopathy, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Reason`,
  tier1Effect: `3 + R damage`,
  tier2Effect: `5 + R damage`,
  tier3Effect: `8 + R damage`,
  effect: `A worthless size 1M object drops onto the target to deal the damage, then rolls into an adjacent unoccupied space of your choice. The object is made of wood, stone, or metal (your choice).`,
  strainedEffect: `The object explodes after the damage is dealt, and each creature adjacent to the target takes damage equal to your Reason score. You also take damage equal to your Reason score that can’t be reduced in any way.`,
  onStrainedFunc: async function(rollResult) {
    const extraDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: `Reason` }));
    const roll = await new Roll(extraDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Damage`
    });
  },
});

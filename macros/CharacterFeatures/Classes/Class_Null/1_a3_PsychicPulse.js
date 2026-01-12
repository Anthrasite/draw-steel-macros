//@id=hC1GaYfBZwz2ID0Q
//@name=Psychic Pulse
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Psychic Pulse`,
  flavorText: `A burst of psionic energy interferes with your enemy’s synapses.`,
  resourceCost: 3,
  keywords: `Area, Psionic`,
  type: `Maneuver`,
  distance: `2 burst`,
  target: `Each enemy in the area`,
  effect: `Each target takes psychic damage equal to twice your Intuition score. Until the start of your next turn, the size of your Null Field ability increases by 1. At the end of your current turn, each enemy in the area of your Null Field ability takes psychic damage equal to your Intuition score.`,
  beforeRollFunc: async function() {
    const psychicDamage = Math.max(0, await game.macros.getName(`GetHighestCharacteristic`).execute({ activeActor: actor, powerRollStat: `Intuition` }));

    const firstRoll = await new Roll((psychicDamage * 2).toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll: firstRoll,
      flavor: `Psychic damage`
    });

    const secondRoll = await new Roll((psychicDamage).toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll: secondRoll,
      flavor: `Psychic damage`
    });
  },
});

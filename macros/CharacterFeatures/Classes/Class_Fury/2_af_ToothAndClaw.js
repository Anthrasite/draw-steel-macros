//@id=Qxnz5jBvghptINro
//@name=Tooth and Claw
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Tooth and Claw`,
  description: `At the end of each of your turns, each enemy adjacent to you takes damage equal to your Might score.`,
  source: `Class`,
  onUseFunc: async function() {
    const damage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: `Might` }));
    const roll = await new Roll(damage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Damage`
    });
  },
});

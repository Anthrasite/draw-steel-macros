//@id=W8rvbRj1NXVElfBn
//@name=Furious Change
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Furious Change`,
  flavorText: `In your anger, you revert to a more bestial form.`,
  keywords: `—`,
  type: `Triggered`,
  distance: `Self`,
  target: `Self`,
  trigger: `You lose Stamina and are not dying.`,
  effect: `You gain temporary Stamina equal to your Might score and can enter your animal form or hybrid form.`,
  extraResourceCost: `1`,
  extraResourceEffect: `If you are not dying, you can spend a Recovery.`,
  afterRollFunc: async function(rollResult) {
    const tempStaminaGained = await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: `Might` });
    await game.macros.getName(`UpdateTempStamina`).execute({ activeActor: actor, value: tempStaminaGained });
  },
});

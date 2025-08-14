//@id=AtLkvR0OspaM2GQg
//@name=Spirit Ward
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Spirit Ward",
  description: `Invisible spirits surround you if you are harmed. Whenever an adjacent creature deals damage to you, they take corruption damage equal to your Intuition score.`,
  source: "Class",
  onUseFunc: async function() {
    const corruptionDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: "Intuition" }));
    const roll = await new Roll(corruptionDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Corruption damage`
    });
  }
});

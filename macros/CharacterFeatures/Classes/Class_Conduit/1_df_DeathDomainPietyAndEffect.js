//@id=p3vujW7sqwVESUzC
//@name=Death Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Death Domain Piety and Effect",
  description: `<strong>Piety:</strong> You gain 2 piety the first time in an encounter that a creature within 10 squares who isn’t a minion is reduced to 0 Stamina, or the first time in an encounter that a solo creature within 10 squares becomes winded.</p>
    <p><strong>Prayer Effect:</strong> You inflict a deadly curse on up to two enemies within 10 squares of you. Each target takes corruption damage equal to twice your Intuition score.</p>`,
  source: "Class",
  onUseFunc: async function() {
    const corruptionDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: "Intuition" })) * 2;
    const roll = await new Roll(corruptionDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Corruption damage`
    });
  }
});

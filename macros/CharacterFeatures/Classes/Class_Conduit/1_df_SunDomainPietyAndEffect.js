//@id=az13KqsM9NOpIGJC
//@name=Sun Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Sun Domain Piety and Effect",
  description: `<p><strong>Piety:</strong> You gain 2 piety the first time in an encounter that an enemy within 10 squares takes fire or holy damage.</p>
    <p><strong>Prayer Effect:</strong> One enemy within 10 squares takes fire damage equal to three times your Intuition score.</p>`,
  source: "Class",
  onUseFunc: async function() {
    const fireDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: "Intuition" })) * 3;
    const roll = await new Roll(fireDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Fire damage`
    });
  }
});

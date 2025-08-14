//@id=9iA5Xgps17SlRZbH
//@name=Storm Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Storm Domain Piety and Effect",
  description: `<strong>Piety:</strong> You gain 2 piety the first time in an encounter that an enemy within 10 squares is force moved.</p>
    <p><strong>Prayer Effect:</strong> Each enemy in a 3 cube within 10 squares takes lightning damage equal to twice your Intuition score.</p>`,
  source: "Class",
  onUseFunc: async function() {
    const lightningDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: "Intuition" })) * 2;
    const roll = await new Roll(lightningDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Lightning damage`
    });
  }
});

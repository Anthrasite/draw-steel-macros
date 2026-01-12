//@id=lPj90fXeSUvd4ixm
//@name=Inertial Fulcrum
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Inertial Fulcrum`,
  description: `Whenever you use an ability to reduce damage dealt to you or to reduce the distance of forced movement imposed upon you, you can deal damage to one enemy in the area of your Null Field ability equal to your Intuition score.`,
  source: `Class`,
  onUseFunc: async function() {
    const damage = await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: `Intuition` });
    if (damage > 0) {
      const roll = await new Roll(damage.toString()).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        activeActor: actor,
        roll: roll,
        flavor: `Damage`
      });
    }
  },
});

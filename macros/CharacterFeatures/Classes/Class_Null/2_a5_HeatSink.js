//@id=OtNRjupDBXHSFLTr
//@name=Heat Sink
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Heat Sink",
  flavorText: "You absorb ambient heat, coating the ground in frost and precipitating snow from the air.",
  resourceCost: 5,
  keywords: "Psionic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: "Until the start of your next turn, the size of your Null Field ability increases by 1, and you and any ally benefit from concealment while in the area. At the end of this turn, each enemy in the area takes cold damage equal to your Intuition score.",
  beforeRollFunc: async function() {
    const coldDamage = Math.max(0, await game.macros.getName(`GetHighestCharacteristic`).execute({ activeActor: actor, powerRollStat: "Intuition" }));

    const roll = await new Roll((coldDamage).toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Cold damage`
    });
  }
});

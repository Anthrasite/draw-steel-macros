//@id=qP870ZDOg6JQknBw
//@name=Revelator
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Revelator",
  resourceCost: 5,
  flavorText: "You channel holy energy to harm unbelievers and reveal those hidden from your judgment.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "3 burst",
  target: "Each enemy in the area",
  effect: "Each target takes holy damage equal to twice your Presence score. Additionally, each hidden target is automatically revealed and can’t become hidden again until the start of your next turn. You can then use your Judgment ability against one target as a free triggered action.",
  afterRollFunc: async function(rollResult) {
    const holyDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: "Presence" })) * 2;
    const roll = await new Roll(holyDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Holy damage`
    });
  }
});

//@id=QpgFCGz2vODdHbUE
//@name=It Is Justice You Fear
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "It Is Justice You Fear",
  resourceCost: 5,
  flavorText: "I am but a vessel. Your own deeds weigh upon you.",
  keywords: "Magic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Might",
  tier1Effect: "8 + M holy damage; P < WEAK, frightened (save ends)",
  tier2Effect: "12 + M holy damage; P < AVERAGE, frightened (save ends)",
  tier3Effect: "15 + M holy damage; P < STRONG, frightened (save ends)",
  effect: "If the target is already frightened of you or another creature and this ability would frighten them again, they instead take psychic damage equal to twice your Presence score.",
  afterRollFunc: async function(rollResult) {
    const targetWasFrightened = await Dialog.confirm({
      title: `Target frightened?`,
      content: `<p>Was the target already frightened?</p>`,
      defaultYes: false
    });

    if (targetWasFrightened) {
      const extraDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: "Presence" })) * 2;
      const roll = await new Roll(extraDamage.toString()).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        activeActor: actor,
        roll,
        flavor: `Psychic damage`
      });
    }
  }
});

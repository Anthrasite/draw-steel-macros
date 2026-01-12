//@id=p1IogUvbcZYNdQ0s
//@name=Judgment Order Benefit - Oracle
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Judgment Order Benefit - Oracle`,
  description: `The first time on a turn that you use your Judgment ability to judge a creature, you can deal holy damage equal to twice your Presence score to the judged creature.`,
  source: `Class`,
  onUseFunc: async function() {
    const holyDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: `Presence` })) * 2;
    const roll = await new Roll(holyDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Holy damage`
    });
  },
});

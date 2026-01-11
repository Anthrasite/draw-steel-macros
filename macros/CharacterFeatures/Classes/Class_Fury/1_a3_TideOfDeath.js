//@id=1aY34VCRiAXBHLP0
//@name=Tide of Death
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Tide of Death",
  resourceCost: 3,
  flavorText: "Teach them the folly of lining up for you.",
  keywords: "Melee, Weapon",
  type: "Main action",
  distance: "Self; see below",
  target: "Self",
  powerRollStat: "Might",
  tier1Effect: "2 damage",
  tier2Effect: "3 damage",
  tier3Effect: "5 damage",
  effect: `<p>You move up to your speed in a straight line, and enemy squares are not difficult terrain for this movement. You can end this movement in a creature’s space and move them to an adjacent unoccupied space. You make one power roll that targets each enemy whose space you move through.</p>
    <p>The last target you damage takes extra damage equal to your Might score for each opportunity attack you trigger during your move.</p>`,
  afterRollFunc: async function(rollResult) {
    const opportunityAttacks = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Opportunity attacks`, label: `Opportunity attacks triggered`, allowNegative: false }));

    if (opportunityAttacks > 0) {
      const extraDamage = (await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: "Might" })) * 2;
      const roll = await new Roll(extraDamage.toString()).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        activeActor: actor,
        roll,
        flavor: `Extra damage`
      });
    }
  }
});

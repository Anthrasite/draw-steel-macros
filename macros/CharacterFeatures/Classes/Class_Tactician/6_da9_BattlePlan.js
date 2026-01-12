//@id=BN5oZLH2IeXClOUx
//@name=Battle Plan
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Battle Plan`,
  flavorText: `With new understanding of your foes, you create the perfect plan to win the battle.`,
  resourceCost: 9,
  keywords: `Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Three creatures`,
  powerRollStat: `Might`,
  tier1Effect: `6 + M damage; slide 1`,
  tier2Effect: `9 + M damage; slide 3`,
  tier3Effect: `13 + M damage; slide 5`,
  effect: `<p>Each target is marked by you. Immediately and until the end of the encounter, the Director tells you if any creatures marked by you have damage immunity or weakness and the value of that immunity or weakness. Additionally, you and each ally within 3 squares of you gains 2 surges.</p>
    <p><strong>Mark Benefit:</strong> Until the end of the encounter, whenever you or any ally makes a strike against a creature marked by you, you can spend 2 focus to make the strike ignore damage immunity and deal extra damage equal to three times your Reason score.</p>`,
  beforeRollFunc: async function() {
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 2, isDelta: true });
  },
});

//@id=RtPibL785z3uGsUI
//@name=Squad! Gear Check!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Squad! Gear Check!`,
  flavorText: `You distract a foe while your allies secure their defensive gear.`,
  resourceCost: 9,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Might`,
  tier1Effect: `9 + M damage`,
  tier2Effect: `13 + M damage`,
  tier3Effect: `18 + M damage`,
  effect: `You and each ally adjacent to the target gain 10 temporary Stamina.`,
  afterRollFunc: async function(rollResult) {
    await game.macros.getName(`UpdateTempStamina`).execute({ activeActor: actor, value: 10 });
  },
});

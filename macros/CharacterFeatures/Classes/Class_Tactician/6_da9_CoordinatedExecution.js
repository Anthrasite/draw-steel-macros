//@id=GgSNtLOZKiUdHTh7
//@name=Coordinated Execution
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Coordinated Execution`,
  flavorText: `You direct your ally to make a killing blow.`,
  resourceCost: 9,
  keywords: `Ranged`,
  type: `Free triggered`,
  distance: `Ranged 10`,
  target: `One ally`,
  trigger: `The target uses an ability to deal rolled damage to a creature while hidden.`,
  effect: `If the target of the triggering ability is not a leader or solo creature, they are reduced to 0 Stamina. If the target of the triggering ability is a minion, the entire squad is killed. If the target of the triggering ability is a leader or solo creature, the triggering ability’s power roll automatically obtains a tier 3 outcome.`
});

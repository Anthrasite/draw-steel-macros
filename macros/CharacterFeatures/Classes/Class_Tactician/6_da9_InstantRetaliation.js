//@id=Yn0iaeN3TCUfrcIM
//@name=Instant Retaliation
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Instant Retaliation",
  flavorText: "You parry with almost supernatural speed.",
  resourceCost: 9,
  keywords: "Melee, Weapon",
  type: "Free triggered",
  distance: "Melee 1",
  target: "One ally",
  trigger: "A creature deals damage to the target.",
  powerRollStat: "Might",
  tier1Effect: "A < WEAK, dazed (save ends)",
  tier2Effect: "A < AVERAGE, dazed (save ends)",
  tier3Effect: "A < STRONG, dazed (save ends)",
  effect: `The target takes half the damage. You then make a power roll against the triggering creature.`
});

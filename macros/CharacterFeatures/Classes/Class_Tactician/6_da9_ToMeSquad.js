//@id=BL2M5vp7fatSzPwG
//@name=To Me Squad!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "To Me Squad!",
  flavorText: "You lead your allies in a charge.",
  resourceCost: 9,
  keywords: "Charge, Melee, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Might",
  tier1Effect: "6 + M damage; one ally within 10 squares can use the Charge main action as a free triggered action, and can use a melee strike signature ability instead of a free strike for the charge",
  tier2Effect: "9 + M damage; one ally within 10 squares can use the Charge main action as a free triggered action, and can use a melee strike signature ability that gains an edge instead of a free strike for the charge",
  tier3Effect: "13 + M damage; two allies within 10 squares can use the Charge main action as a free triggered action, and can each use a melee strike signature ability that gains an edge instead of a free strike for the charge",
  effect: `If the target is hit with two or more strikes as part of this ability and they have R < STRONG, they are dazed (save ends). If the target is reduced to 0 Stamina before one or both allies has made their strike, the ally or allies can pick a different target.`
});

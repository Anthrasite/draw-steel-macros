//@id=ilH2cDFuofGjE65r
//@name=Inspiring Strike
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Inspiring Strike",
  flavorText: "Your attack gives an ally hope.",
  resourceCost: 3,
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1 or ranged 5",
  target: "One creature or object",
  powerRollStat: "Might",
  tier1Effect: "3 + M damage; you or one ally within 10 squares of you can spend a Recovery",
  tier2Effect: "5 + M damage; you or one ally within 10 squares of you can spend a Recovery",
  tier3Effect: "8 + M damage; you and one ally within 10 squares of you can spend a Recovery, and each of you gains an edge on the next ability roll you make during the encounter"
});

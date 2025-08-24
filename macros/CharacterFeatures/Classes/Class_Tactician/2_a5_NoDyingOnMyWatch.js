//@id=0HPnwzaV8jlgFOeL
//@name=No Dying on My Watch
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "No Dying on My Watch",
  flavorText: "You prioritize saving an ally over your own safety.",
  resourceCost: 5,
  keywords: "Ranged, Strike, Weapon",
  type: "Triggered",
  distance: "Ranged 5",
  target: "One enemy",
  trigger: "The target deals damage to an ally.",
  powerRollStat: "Might",
  tier1Effect: "R < WEAK, the target is frightened of the triggering ally (save ends)",
  tier2Effect: "R < AVERAGE, the target is frightened of the triggering ally (save ends)",
  tier3Effect: "R < STRONG, the target is frightened of the triggering ally (save ends)",
  effect: `You move up to your speed toward the triggering ally, ending this movement adjacent to them or in the nearest square if you can’t reach an adjacent square. The triggering ally can spend a Recovery and gains 5 temporary Stamina for each enemy you came adjacent to during the move. You then make a power roll against the target.`
});

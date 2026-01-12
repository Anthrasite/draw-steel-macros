//@id=tNXYR2s5H4hm7yl6
//@name=Witty Banter
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Witty Banter",
  flavorText: "A lyrical (and physical) jab insults an enemy and inspires an ally.",
  keywords: "Magic, Melee, Ranged, Strike",
  type: "Main action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Presence",
  tier1Effect: "4 + P psychic damage",
  tier2Effect: "5 + P psychic damage",
  tier3Effect: "7 + P psychic damage",
  effect: "One ally within 10 squares of you can end one effect on them that is ended by a saving throw or that ends at the end of their turn.",
  extraResourceCost: "1",
  extraResourceEffect: "The chosen ally can spend a Recovery.",
});

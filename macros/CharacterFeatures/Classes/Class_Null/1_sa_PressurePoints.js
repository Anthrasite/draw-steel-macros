//@id=Y8B5IeiVUnrRdwul
//@name=Pressure Points
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Pressure Points",
  flavorText: "You strike at key nerve clusters to leave your foe staggered.",
  keywords: "Melee, Psionic, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Agility",
  tier1Effect: "4 + A damage; A < WEAK, weakened (save ends)",
  tier2Effect: "7 + A damage; A < AVERAGE, weakened (save ends)",
  tier3Effect: "9 + A damage; A < STRONG, weakened (save ends)"
});

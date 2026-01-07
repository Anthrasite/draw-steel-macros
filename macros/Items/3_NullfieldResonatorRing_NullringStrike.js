//@id=PXF0ZOyvhLdKSqJa
//@name=Nullring Strike
//@img=icons/equipment/finger/ring-band-copper.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Nullring Strike",
  flavorText: "Your punch delivers a devastating burst of psionic energy.",
  keywords: "Melee, Psionic, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might or Agility",
  tier1Effect: "3 psychic damage",
  tier2Effect: "5 psychic damage; I < AVERAGE, slowed (save ends)",
  tier3Effect: "8 psychic damage; I < STRONG, slowed (save ends)",
  effect: "While slowed in this way, the target takes a bane on magic or psionic abilities."
});

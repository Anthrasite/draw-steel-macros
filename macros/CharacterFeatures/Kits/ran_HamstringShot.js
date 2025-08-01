//@id=FOWdZy4xkaHAbCRp
//@name=Hamstring Shot
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Hamstring Shot",
  flavorText: "A well-placed shot leaves your enemy struggling to move.",
  keywords: "Ranged, Strike, Weapon",
  isKit: true,
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "3 + M or A damage; A < WEAK, slowed (save ends)",
  tier2Effect: "5 + M or A damage; A < AVERAGE, slowed (save ends)",
  tier3Effect: "7 + M or A damage; A < STRONG, slowed (save ends)"
});

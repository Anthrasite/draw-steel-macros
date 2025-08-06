//@id=osHIZ1e3xbdkvtgN
//@name=Phase Strike
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Phase Strike",
  flavorText: "For a moment, your foe slips out of phase with this manifold.",
  resourceCost: 5,
  keywords: "Melee, Psionic, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "3 + A psychic damage; I < WEAK, the target goes out of phase (save ends)",
  tier2Effect: "4 + A psychic damage; I < AVERAGE, the target goes out of phase (save ends)",
  tier3Effect: "6 + A psychic damage; I < STRONG, the target goes out of phase (save ends)",
  effect: "A target who goes out of phase is slowed, has their stability reduced by 2, and can’t obtain a tier 3 outcome on ability rolls."
});

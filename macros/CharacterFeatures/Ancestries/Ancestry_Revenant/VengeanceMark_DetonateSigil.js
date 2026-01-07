//@id=A8trcUXWhVqSNvaO
//@name=Detonate Sigil
//@img=icons/magic/death/hand-dirt-undead-zombie.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Detonate Sigil",
  flavorText: "A magic sigil you placed on a creature explodes with energy.",
  keywords: "Magic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature bearing your sigil",
  powerRollStat: "Reason, Intuition, or Presence",
  tier1Effect: "3 + R, I, or P damage; slide 1",
  tier2Effect: "5 + R, I, or P damage; slide 2",
  tier3Effect: "7 + R, I, or P damage; slide 3",
  effect: "The sigil disappears from the creature."
});

//@id=SmIK0f126R8PNrQs
//@name=Rogue Wave
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Rogue Wave",
  flavorText: "You summon a wave of water to batter your foe.",
  keywords: "Magic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Might, Agility, Reason, Intuition, or Presence",
  tier1Effect: "2 damage; push or pull 1",
  tier2Effect: "5 damage; push or pull 2",
  tier3Effect: "7 damage; push or pull 3",
  effect: "You can forgo dealing damage with this ability."
});

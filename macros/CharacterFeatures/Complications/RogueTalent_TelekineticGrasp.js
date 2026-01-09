//@id=r2K0p4AYzEXPc375
//@name=Telekinetic Grasp
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Telekinetic Grasp",
  flavorText: "You reach out with your mind to move a creature or object.",
  keywords: "Psionic, Ranged, Strike",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Might, Intuition, or Presence",
  tier1Effect: "Push or pull 1",
  tier2Effect: "Push or pull 2",
  tier3Effect: "Push or pull 3"
});

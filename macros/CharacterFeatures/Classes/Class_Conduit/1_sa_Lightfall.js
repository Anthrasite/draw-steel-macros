//@id=JI3kCLPfpO0a6oby
//@name=Lightfall
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Lightfall",
  flavorText: "A rain of holy light scours your enemies and repositions your allies.",
  keywords: "Area, Magic",
  type: "Main action",
  distance: "2 burst",
  target: "Each enemy in the area",
  powerRollStat: "Intuition",
  tier1Effect: "2 holy damage",
  tier2Effect: "3 holy damage",
  tier3Effect: "5 holy damage",
  effect: "You can teleport yourself and each ally in the area to unoccupied spaces in the area."
});

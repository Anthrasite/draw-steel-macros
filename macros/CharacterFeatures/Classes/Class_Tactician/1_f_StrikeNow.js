//@id=qNnk3Y057EwUJIio
//@name=“Strike Now!”
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "“Strike Now!”",
  flavorText: "Your foe left an opening. You point this out to an ally!",
  keywords: "Ranged",
  type: "Main action",
  distance: "Ranged 10",
  target: "One ally",
  effect: "The target can use a signature ability as a free triggered action.",
  extraResourceCost: "5",
  extraResourceEffect: "You target two allies instead of one."
});

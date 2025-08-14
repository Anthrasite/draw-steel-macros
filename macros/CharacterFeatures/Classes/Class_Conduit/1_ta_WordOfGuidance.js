//@id=E2UruteOmSPofynQ
//@name=Word of Guidance
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Word of Guidance",
  flavorText: "You invigorate an attacking ally with divine energy.",
  keywords: "Magic, Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "One ally",
  trigger: "The target makes an ability roll for a damage-dealing ability.",
  effect: "The power roll gains an edge.",
  extraResourceCost: "1",
  extraResourceEffect: "The power roll has a double edge."
});

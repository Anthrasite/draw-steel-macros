//@id=be3OZGzj9JrtuhAd
//@name=Word of Judgment
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Word of Judgment",
  flavorText: "Your holy word saps an attacking enemy’s strength.",
  keywords: "Magic, Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "One ally",
  trigger: "The target would take damage from an ability that uses a power roll.",
  effect: "The power roll takes a bane against the target.",
  extraResourceCost: "1",
  extraResourceEffect: "The power roll has a double bane against the target."
});

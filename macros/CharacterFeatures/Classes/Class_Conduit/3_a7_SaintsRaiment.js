//@id=SYj3WRfrbDdGNtnv
//@name=Saint’s Raiment
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Saint’s Raiment",
  resourceCost: 7,
  flavorText: "An ally becomes the wearer of an empowered golden cloak.",
  keywords: "Magic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "One ally",
  effect: "The target gains 20 temporary Stamina and 3 surges."
});

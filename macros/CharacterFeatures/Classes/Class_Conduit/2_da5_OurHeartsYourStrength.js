//@id=A4raJDNgsOXcYnG3
//@name=Our Hearts Your Strength
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Our Hearts Your Strength",
  resourceCost: 5,
  flavorText: "An ally gains strength from their friends.",
  keywords: "Magic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Self and one ally",
  effect: "Until the end of the encounter or until the target is dying, at the start of each of the target’s turns, they gain a bonus to speed and a bonus to rolled damage equal to the number of allies within 10 squares of them. This bonus lasts until the start of their next turn."
});

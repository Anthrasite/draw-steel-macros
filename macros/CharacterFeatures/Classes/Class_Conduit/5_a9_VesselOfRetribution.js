//@id=XfHwgPNekFDUtMyJ
//@name=Vessel of Retribution
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Vessel of Retribution",
  resourceCost: 9,
  flavorText: "You infuse yourself or an ally with the retributive energy of the gods, waiting to be unleashed.",
  keywords: "Magic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Self or one ally",
  effect: "The first time the target is dying or winded before the end of the encounter, each enemy within 5 squares of them takes 15 holy damage."
});

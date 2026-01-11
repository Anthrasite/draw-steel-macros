//@id=ENAqr5n8bHjztyWT
//@name=Blessing of the Midday Sun
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Blessing of the Midday Sun",
  resourceCost: 9,
  flavorText: "Your body emits a heat that bakes your enemies and inspires your allies.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "4 aura",
  target: "Self and each creature in the area",
  effect: "Until the end of the encounter or until you are dying, each enemy in the area takes a bane on power rolls, and you and each ally in the area gain 1 surge at the end of each of your turns."
});

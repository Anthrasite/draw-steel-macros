//@id=qrAJGIXxNRtSzWVK
//@name=Sacred Bond
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Sacred Bond`,
  resourceCost: 5,
  flavorText: `You forge a divine connection between two creatures.`,
  keywords: `Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self and one ally`,
  effect: `Until the end of the encounter, whenever one target takes damage, the other target can use a free triggered action to take the damage instead. The original target suffers any effects associated with the damage. Additionally, whenever one target spends a Recovery, the other target can use a free triggered action to spend a Recovery.`,
});

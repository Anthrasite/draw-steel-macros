//@id=2vpesSMKdo8Lq4xO
//@name=Beacon of Grace
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Beacon of Grace`,
  resourceCost: 9,
  flavorText: `You ignite a foe with holy radiance, rewarding allies who attack them.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Intuition`,
  tier1Effect: `8 + I holy damage`,
  tier2Effect: `13 + I holy damage`,
  tier3Effect: `17 + I holy damage`,
  effect: `Until the end of the encounter, whenever you or any ally damages the target using an ability, that creature can spend a Recovery. If the target is reduced to 0 Stamina before the end of the encounter, you can use a free triggered action to move this effect to another creature within distance.`,
});

//@id=1JWluyRP7m06zTdf
//@name=Blessing of Insight
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Blessing of Insight`,
  resourceCost: 5,
  flavorText: `The gods grant insight revealing where best to strike your enemies.`,
  keywords: `Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self and each ally`,
  effect: `Until the end of the encounter or until you are dying, each target gains 1 surge at the end of each of your turns.`,
});

//@id=r5g7QPapomBZuN2H
//@name=Lauded by God
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Lauded by God`,
  resourceCost: 9,
  flavorText: `You beseech the gods to give your allies what they need to win the day, and the gods answer.`,
  keywords: `Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Two allies`,
  effect: `Each target gains 3 of their Heroic Resource.`,
});

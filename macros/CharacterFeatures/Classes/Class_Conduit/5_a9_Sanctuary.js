//@id=juZvxgBWf0pb54A7
//@name=Sanctuary
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Sanctuary`,
  resourceCost: 9,
  flavorText: `You send yourself or an ally to a divine manifold to instantaneously regain health.`,
  keywords: `Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self or one ally`,
  effect: `The target is removed from the encounter map until the start of their next turn and can spend any number of Recoveries. At the start of their turn, the target reappears in the space they left or the nearest unoccupied space of their choice.`,
});

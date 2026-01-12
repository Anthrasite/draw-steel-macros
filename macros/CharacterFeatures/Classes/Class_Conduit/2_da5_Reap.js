//@id=ZYLwvldr0ekTuXs7
//@name=Reap
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Reap`,
  resourceCost: 5,
  flavorText: `The gods reward those who smite their foes.`,
  keywords: `Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Each ally`,
  effect: `Until the start of your next turn, each time a target kills an enemy, they regain Stamina equal to 5 + your Intuition score.`,
});

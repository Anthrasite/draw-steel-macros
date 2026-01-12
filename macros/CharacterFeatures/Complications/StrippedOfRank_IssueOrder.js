//@id=WmnH846CzTbeiSqZ
//@name=Issue Order
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Issue Order`,
  flavorText: `“Move or die, folks.”`,
  keywords: `Ranged`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One ally`,
  effect: `The target can use a triggered action to take a main action, a maneuver, or a move action. If you have the Stike Now tactician ability, the target can use a free triggered action instead of a triggered action to gain the benefit of this ability.`,
});

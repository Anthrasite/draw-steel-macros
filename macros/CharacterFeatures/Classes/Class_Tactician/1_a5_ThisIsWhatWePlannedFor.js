//@id=560pLatQwehPrVMl
//@name=This Is What We Planned For
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `This Is What We Planned For`,
  flavorText: `All those coordination drills you made them do finally pay off.`,
  resourceCost: 5,
  keywords: `Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Two allies`,
  effect: `Each target who hasn’t acted yet this combat round can take their turn in any order immediately after yours.`,
});

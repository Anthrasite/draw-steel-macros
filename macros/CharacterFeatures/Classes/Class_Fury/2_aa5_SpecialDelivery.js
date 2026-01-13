//@id=XubEmIGrphHfi9nL
//@name=Special Delivery
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Special Delivery`,
  resourceCost: 5,
  flavorText: `You ready?`,
  keywords: `Melee, Weapon`,
  type: `Maneuver`,
  distance: `Melee 1`,
  target: `One willing ally`,
  effect: `You vertically push the target up to 4 squares. This forced movement ignores the target’s stability, and the target takes no damage from colliding with creatures or objects. At the end of this movement, the target can make a free strike that deals extra damage equal to your Might score.`,
});

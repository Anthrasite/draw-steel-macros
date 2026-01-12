//@id=4Dt2csTJZhofXBQp
//@name=Blur
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Blur`,
  flavorText: `You release stored time, allowing you to act twice.`,
  resourceCost: 5,
  keywords: `Psionic`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `You can use a signature or heroic ability. You gain an edge on that ability’s power rolls.`,
});

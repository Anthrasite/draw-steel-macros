//@id=PpdEgNb8sAtljZQ4
//@name=Demon Unleashed
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Demon Unleashed`,
  resourceCost: 7,
  flavorText: `Foes tremble at the sight of you.`,
  keywords: `Magic`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `Until the end of the encounter or until you are dying, each enemy who starts their turn adjacent to you and has P < STRONG is frightened until the end of their turn.`,
});

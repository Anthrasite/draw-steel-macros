//@id=AbSZp7QU6tRqwF8s
//@name=Stay Strong and Focus!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Stay Strong and Focus!`,
  flavorText: `“We can do this! Keep faith and hold fast!”`,
  resourceCost: 7,
  keywords: `—`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `Until the end of the encounter or until you are dying, whenever you or any ally deals damage to a target marked by you, the creature who dealt the damage can spend a Recovery.`,
});

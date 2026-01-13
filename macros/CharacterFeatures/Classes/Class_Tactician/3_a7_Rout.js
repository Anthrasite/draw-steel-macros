//@id=Q6IA0gLTJ9mFSnhM
//@name=Rout
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Rout`,
  flavorText: `The tide begins to turn.`,
  resourceCost: 7,
  keywords: `—`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `Until the end of the encounter or until you are dying, whenever you or any ally deals damage to a target marked by you who has R < AVERAGE, the target is frightened of the creature who dealt the damage (save ends).`,
});

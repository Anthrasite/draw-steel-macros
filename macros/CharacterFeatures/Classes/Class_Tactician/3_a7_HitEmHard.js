//@id=NAjK7kx8qeG1PO2n
//@name=Hit ’Em Hard!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hit ’Em Hard!`,
  flavorText: `Your allies see the advantages in attacking the targets you select.`,
  resourceCost: 7,
  keywords: `—`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `Until the end of the encounter or until you are dying, whenever you or any ally deals damage to a target marked by you, that creature gains 2 surges, which they can use immediately.`
});

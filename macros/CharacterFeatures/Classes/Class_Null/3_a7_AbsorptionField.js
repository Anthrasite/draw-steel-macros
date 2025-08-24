//@id=FEjJzBOre5ICbi0w
//@name=Absorption Field
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Absorption Field",
  flavorText: "Your null field absorbs kinetic energy.",
  resourceCost: 7,
  keywords: "Psionic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: "Until the end of the encounter, the size of your Null Field ability increases by 1. While the area of that ability is enlarged this way, each enemy in the area takes a bane on ability rolls."
});

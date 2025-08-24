//@id=u13ZlXI4cVROhDNg
//@name=Stabilizing Field
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Stabilizing Field",
  flavorText: "You project order, making it harder for your enemies to interfere with you and your allies.",
  resourceCost: 7,
  keywords: "Psionic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: "Until the end of the encounter, the size of your Null Field ability increases by 1. While the area of that ability is enlarged this way, you ignore difficult terrain and reduce the potency of enemy effects targeting you by 1 for you. You can also use a free triggered action at the start of each of your turns to end one effect on you that is ended by a saving throw or that ends at the end of your turn. Each ally in the area also gains these benefits."
});

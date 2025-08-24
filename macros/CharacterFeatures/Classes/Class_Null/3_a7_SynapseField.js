//@id=Aj3edQZ091PknScb
//@name=Synapse Field
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Synapse Field",
  flavorText: "Attacks made by allies in your null field disrupt your enemies’ thoughts, causing psychic pain.",
  resourceCost: 7,
  keywords: "Psionic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: "Until the end of the encounter, the size of your Null Field ability increases by 1. While the area of that ability is enlarged this way, whenever an enemy in the area takes rolled damage, they take extra psychic damage equal to twice your Intuition score."
});

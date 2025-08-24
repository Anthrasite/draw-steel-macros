//@id=4pCnorqcxwBgA715
//@name=Molecular Rearrangement Field
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Molecular Rearrangement Field",
  flavorText: "Your enemies’ wounds open, your allies’ wounds close.",
  resourceCost: 7,
  keywords: "Psionic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: "Until the end of the encounter, the size of your Null Field ability increases by 1. While the area of that ability is enlarged this way, each enemy who has I < AVERAGE and enters the area for the first time in a combat round or starts their turn there is bleeding (save ends). Each ally who enters the area for the first time in a combat round or starts their turn there gains temporary Stamina equal to your Intuition score."
});

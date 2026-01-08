//@id=Kduwcq5nWLaIJE61
//@name=Battlefield Commander - Charge!
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Battlefield Commander - Charge!",
  flavorText: "Follow me!",
  resourceCost: 9,
  keywords: "Area",
  type: "Main action",
  distance: "3 burst",
  target: "Self and each ally in the area",
  effect: "Each target can use the Charge main action."
});

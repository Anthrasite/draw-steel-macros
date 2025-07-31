//@id=pA8FEeHyOGW465of
//@name=Flowering Bed
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Flowering Bed",
  description: "While you have 3 or more essence and are not dying, you exude an aura of magic whose distance is equal to your Reason score. At the end of each of your turns, each ally in the area gains temporary Stamina equal to your Reason score. You can activate and deactivate the aura at will (no action required).",
  source: "Class"
});

//@id=BRiycNoqKdfSaFtL
//@name=Wellspring of Grace
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Wellspring of Grace",
  resourceCost: 5,
  flavorText: "A holy light is emitted from your body, healing your allies.",
  keywords: "Area, Magic",
  type: "Main action",
  distance: "3 aura",
  target: "Each ally in the area",
  effect: "Until the end of the encounter or until you are dying, whenever a target starts their turn in the area, they can spend a Recovery."
});

//@id=zFl29ZScR8PBGJmU
//@name=Dramatic Reversal
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Dramatic Reversal",
  resourceCost: 5,
  flavorText: "Give the audience a surprise.",
  keywords: "Area, Magic",
  type: "Main action",
  distance: "3 burst",
  target: "Self and each ally in the area",
  powerRollStat: "Presence",
  tier1Effect: "The target can shift 1 square and make a free strike.",
  tier2Effect: "The target can shift up to 2 squares and make a free strike that gains an edge.",
  tier3Effect: "The target can shift up to 3 squares and make a free strike that gains an edge, then can spend a Recovery.",
});

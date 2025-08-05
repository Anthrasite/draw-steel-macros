//@id=mtDdEcLPCbWiF4R3
//@name=Glowing Recovery
//@img=modules/draw-steel-macros/icons/ancestry/orc.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Glowing Recovery",
  description: `Your bloodfire allows you to regain your strength quicker than others. Whenever you use the Catch Breath maneuver, you can spend as many Recoveries as you like.`,
  source: "Ancestry"
});

//@id=rGvb38Dk0PMWEdlq
//@name=Great Fortitude
//@img=modules/draw-steel-macros/icons/ancestry/hakaan.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Great Fortitude",
  description: `Your hearty constitution prevents you from losing strength. You can’t be made weakened.`,
  source: "Ancestry"
});

//@id=FLtw2Ko1qlexBIyr
//@name=Grounded
//@img=modules/draw-steel-macros/icons/ancestry/orc.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Grounded",
  description: `The magic in your blood makes it difficult for others to move you. You have a +1 bonus to stability.`,
  source: "Ancestry"
});

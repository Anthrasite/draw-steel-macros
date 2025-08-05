//@id=8dhaAzCpuqc4FgDU
//@name=Draconian Guard
//@img=modules/draw-steel-macros/icons/ancestry/dragon-knight.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Draconian Guard",
  description: "Whenever you or an adjacent creature takes damage from a strike, you can use a triggered action to guard against the blow. You reduce any damage from the strike by an amount equal to your level.",
  source: "Ancestry"
});

//@id=eN5KEOq3xb2Sl1dD
//@name=Out of Position
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Out of Position",
  description: `Even before battle begins, your enemies struggle to keep up with your tactics. At the start of an encounter, you can use a free triggered action to use your Mark ability against one enemy you have line of effect to, even if you are surprised. You can then slide the marked target up to 3 squares, ignoring stability. The target can’t be moved in a way that would harm them (such as over a cliff), leave them dying, or result in them suffering a condition or other negative effect.`,
  source: "Class"
});

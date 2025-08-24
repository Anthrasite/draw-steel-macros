//@id=VagmjYnZbBCyPSkK
//@name=Improved Field Arsenal
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Improved Field Arsenal",
  description: `Your expertise with weapons has grown. Whenever you use a signature ability from one of your equipped kits or make a free strike using a weapon from one of your equipped kits, you gain an edge.`,
  source: "Class"
});

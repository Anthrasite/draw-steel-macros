//@id=LN96vrtpBhbzDQSa
//@name=Trained Assassin
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Trained Assassin",
  description: `You know just where to cut your enemies. Whenever you make a strike that has no bane or double bane, and that incorporates 1 or more surges, you gain 1 additional surge that you can use only on that strike.`,
  source: "Class"
});

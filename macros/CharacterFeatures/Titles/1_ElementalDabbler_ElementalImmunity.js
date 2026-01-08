//@id=ruOPt9LfbgH12IwC
//@name=Elemental Dabbler - Elemental Immunity
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Elemental Dabbler - Elemental Immunity",
  description: `Choose a damage type to which the defeated creature had an immunity (such as fire). You have immunity to the chosen damage type equal to your highest characteristic score.`,
  source: "Title"
});

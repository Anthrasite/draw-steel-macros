//@id=TzCmQ8wbsXRodOkA
//@name=Elemental Blaster
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Elemental Blaster",
  description: `Choose a damage type to which the defeated creature had an immunity (such as fire). You have the Elementalist 1st-level Hurl Element feature, dealing the chosen damage type.`,
  source: "Title"
});

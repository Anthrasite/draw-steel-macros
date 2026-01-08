//@id=FdhrVWEmsUY86QpH
//@name=Awakened - Telepathy
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Awakened - Telepathy",
  description: `As a maneuver, you communicate telepathically with a creature within 10 squares who understands a language you know. The creature can respond telepathically as part of the same maneuver.`,
  source: "Title"
});

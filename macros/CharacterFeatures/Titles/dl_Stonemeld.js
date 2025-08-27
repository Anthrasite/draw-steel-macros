//@id=J6NjZu5xUytK0dGB
//@name=Stonemeld
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Stonemeld",
  description: `While adjacent to a stone wall, you can use a maneuver to gain concealment. This concealment lasts until you leave the square or use an ability.`,
  source: "Title"
});

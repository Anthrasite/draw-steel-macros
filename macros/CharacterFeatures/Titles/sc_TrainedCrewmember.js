//@id=nJejVEIuGBNHR9ma
//@name=Trained Crewmember
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Trained Crewmember",
  description: `You gain an edge on tests made to handle air or sea vessels.`,
  source: "Title"
});

//@id=Z5WKxSHB3QJfhRDr
//@name=Battlefield Commander - Student of War
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Battlefield Commander - Student of War`,
  description: `Choose a 1st-level doctrine feature from the tactician class. You gain that feature even if you don’t have the Tactical Doctrine feature.`,
  source: `Title`,
});

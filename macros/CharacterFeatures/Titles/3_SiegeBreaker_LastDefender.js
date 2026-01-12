//@id=Tt4QH9J6hqBbczNP
//@name=Siege Breaker - Last Defender
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Siege Breaker - Last Defender`,
  description: `Whenever an ally within 5 squares is reduced to 0 Stamina, you gain temporary Stamina equal to the ally’s level (or 1 if they have no level). If you already have temporary Stamina granted by this title, you increase your temporary Stamina by the amount you would have gained.`,
  source: `Title`,
});

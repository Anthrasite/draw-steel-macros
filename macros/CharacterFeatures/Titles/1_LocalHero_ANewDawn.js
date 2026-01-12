//@id=UDfhz4oMIPesGcyK
//@name=Local Hero - A New Dawn
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Local Hero - A New Dawn`,
  description: `Each time you finish a respite while in a community you have saved, the party gains a hero token. This hero token disappears at the end of your next respite if it hasn’t been used.`,
  source: `Title`,
});

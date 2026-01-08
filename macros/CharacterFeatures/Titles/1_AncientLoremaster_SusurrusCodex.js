//@id=WNAtEOPzr3eZBdMk
//@name=Ancient Loremaster - Susurrus Codex
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Ancient Loremaster - Susurrus Codex",
  description: `You find a sinister book that whispers advice in a voice no one else can hear. As long as you follow the book’s advice, you gain an edge on Reason tests and take a bane on Presence tests. You can stop following the book’s advice at any time, but the book won’t speak to you for the rest of the day.`,
  source: "Title"
});

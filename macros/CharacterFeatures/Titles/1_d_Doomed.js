//@id=XVZOK1tnvDfTqhka
//@name=Doomed
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Doomed",
  description: `You aren’t destined for a meaningful death, but you still might achieve one. When you’re reduced to 0 Stamina but remain conscious, you can become doomed. If you do, you can’t regain Stamina, you automatically obtain a tier 3 outcome on tests and power rolls, and you don’t die until your Stamina reaches the negative of your Stamina maximum. At the end of the encounter, you die.`,
  source: "Title"
});

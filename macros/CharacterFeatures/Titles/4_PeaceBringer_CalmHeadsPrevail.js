//@id=tj2wR8fUG3hISMcz
//@name=Peace Bringer - Calm Heads Prevail
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Peace Bringer - Calm Heads Prevail",
  description: `<p>Your choice of your Reason or Presence increases by 1 (to a maximum of 6).</p>
    <p>Additionally, when you make a test to stop combat and start a negotiation, you always obtain a tier 3 outcome.</p>`,
  source: "Title"
});

//@id=2biDRTIJmN1Zolkv
//@name=Noble - Noble Splendor
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Noble - Noble Splendor",
  description: `<p>You earn 1 Renown and 1 Wealth.</p>
    <p>If you take this title, you might occasionally be called upon to perform duties for the person who granted your noble rank.</p>`,
  source: "Title"
});

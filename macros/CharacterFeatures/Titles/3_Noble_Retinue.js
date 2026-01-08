//@id=AUL4rNw0QM16EZK5
//@name=Noble - Retinue
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Noble - Retinue",
  description: `The number of followers you can recruit increases by two.</p>
    <p>If you take this title, you might occasionally be called upon to perform duties for the person who granted your noble rank.</p>`,
  source: "Title"
});

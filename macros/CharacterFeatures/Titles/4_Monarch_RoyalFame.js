//@id=bhC0xo9Fk16jgYKz
//@name=Monarch - Royal Fame
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Monarch - Royal Fame",
  description: `You earn 2 Renown.</p>
    <p>If you take this title, you might be called upon to perform duties for your nation.</p>`,
  source: "Title"
});

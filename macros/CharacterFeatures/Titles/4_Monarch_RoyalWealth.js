//@id=Vj2MJDm1A6EoRIvP
//@name=Monarch - Royal Wealth
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Monarch - Royal Wealth",
  description: `<p>You earn 2 Wealth.</p>
    <p>If you take this title, you might be called upon to perform duties for your nation.</p>`,
  source: "Title"
});

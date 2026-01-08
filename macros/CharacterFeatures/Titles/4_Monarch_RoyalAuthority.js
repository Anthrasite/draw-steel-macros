//@id=uWUJj9h5PaD7eQbs
//@name=Monarch - Royal Authority
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Monarch - Royal Authority",
  description: `Inhabitants of your nation must obey your lawful orders or suffer the consequences.</p>
    <p>If you take this title, you might be called upon to perform duties for your nation.</p>`,
  source: "Title"
});

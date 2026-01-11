//@id=nJELYmkIAW3to4Ne
//@name=Knight - Knightly Aegis
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Knight - Knightly Aegis",
  description: `<p>Your Stamina maximum increases by 6.</p>
    <p>If you take this title, you might occasionally be called upon to perform duties for the person who knighted you.</p>`,
  source: "Title"
});

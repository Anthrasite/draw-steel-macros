//@id=qAmipWkNdV4nlboO
//@name=Knight - Heraldic Fame
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Knight - Heraldic Fame`,
  description: `<p>You earn 1 Renown.</p>
    <p>If you take this title, you might occasionally be called upon to perform duties for the person who knighted you.</p>`,
  source: `Title`,
});

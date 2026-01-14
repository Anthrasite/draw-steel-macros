//@id=CKsU1PjgySreLlBD
//@name=Mind Recovery
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Mind Recovery`,
  description: `<p>Whenever you spend a Recovery to regain Stamina while strained, you can forgo the Stamina and gain 3 clarity instead.</p>
    <p>Additionally, the first time each combat round that a creature is force moved, you gain 2 clarity instead of 1.</p>`,
  source: `Class`,
});

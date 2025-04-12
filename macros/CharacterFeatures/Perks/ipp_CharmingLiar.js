//@id=mwu95lCKePYtFvbh
//@name=Charming Liar
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Charming Liar",
  description: `If you fail a test with the Lie skill, you don’t suffer any consequences associated with the failure. You can’t benefit from this perk again until you gain at least 1 Victory.</p>
    <p>During a negotiation, you can be caught in one lie without negative consequences. You can’t benefit from this perk again until you gain at least 1 Victory.</p>`,
  source: "Perk"
});

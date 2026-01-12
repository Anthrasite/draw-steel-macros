//@id=VG95yjs42CptBNcY
//@name=Champion Competitor - Best of the Best
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Champion Competitor - Best of the Best`,
  description: `<p>A characteristic used during the competition increases by 1 (to a maximum of 6).</p>
    <p>Additionally, choose a skill you used during the competition. You gain a +4 bonus to tests made using that skill instead of a +2 bonus.</p>`,
  source: `Title`,
});

//@id=MDRFI3cJ2Gr8PEgy
//@name=Champion Competitor - Glory and Riches
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Champion Competitor - Glory and Riches",
  description: `<p>A characteristic used during the competition increases by 1 (to a maximum of 6).</p>
    <p>Additionally, you earn 2 Renown and 1 Wealth.</p>`,
  source: "Title"
});

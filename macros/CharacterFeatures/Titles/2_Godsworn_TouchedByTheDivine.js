//@id=PFLTOeNvsruGiAok
//@name=Godsworn - Touched by the Divine
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Godsworn - Touched by the Divine`,
  description: `Choose a god or saint from the Deities and Domains table. From that god or saint’s domains, choose a Conduit 1st-level domain feature.`,
  source: `Title`,
});

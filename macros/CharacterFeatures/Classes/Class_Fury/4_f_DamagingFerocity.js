//@id=nLBZW5eKgFduDlME
//@name=Damaging Ferocity
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Damaging Ferocity`,
  description: `The first time you take damage each combat round, you gain 2 ferocity instead of 1.`,
  source: `Class`,
});

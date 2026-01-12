//@id=6qpcM1k9YG8R2r7t
//@name=Regenerative Field
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Regenerative Field`,
  description: `The first time each combat round that an enemy in the area of your Null Field ability uses a main action, you gain 2 discipline instead of 1.`,
  source: `Class`,
});

//@id=M3eOW14qyGHjZSDo
//@name=Focus on Their Weaknesses
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Focus on Their Weaknesses`,
  description: `The first time each combat round that you or any ally damages a target marked by you, you gain 2 focus instead of 1.`,
  source: `Class`,
});

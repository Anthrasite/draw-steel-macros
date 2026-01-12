//@id=dPDhLqZBSrpxoKnO
//@name=Interphase
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Interphase`,
  flavorText: `You slip into a faster timestream to act more quickly.`,
  resourceCost: 9,
  keywords: `Psionic`,
  type: `Main action`,
  distance: `Self`,
  target: `Self`,
  effect: `You can use up to three signature abilities, each of which gains an edge.`,
});

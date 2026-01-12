//@id=M3lbOKEsn9x7tN4i
//@name=Skin Like Castle Walls
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Skin Like Castle Walls`,
  flavorText: `You cover yourself or an ally in protective stone.`,
  keywords: `Earth, Magic, Ranged`,
  type: `Triggered`,
  distance: `Ranged 10`,
  target: `Self or one ally`,
  trigger: `The target takes damage.`,
  effect: `The target takes half the damage.`,
  extraResourceCost: `1`,
  extraResourceEffect: `If the damage has any potency effects associated with it, the potency is reduced by 1 for the target.`,
});

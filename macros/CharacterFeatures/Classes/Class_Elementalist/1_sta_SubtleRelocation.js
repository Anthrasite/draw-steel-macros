//@id=hwLE1glGzakMtv7I
//@name=Subtle Relocation
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Subtle Relocation`,
  flavorText: `You call on the void to swallow and spit out an ally.`,
  keywords: `Magic, Ranged, Void`,
  type: `Triggered`,
  distance: `Ranged 10`,
  target: `Self or one ally`,
  trigger: `The target starts their turn, moves, or is force moved.`,
  effect: `You teleport the target up to a number of squares equal to your Reason score. If the target moves to trigger this ability, you can teleport them at any point during the move.`,
  extraResourceCost: `1`,
  extraResourceEffect: `You teleport the target up to a number of squares equal to twice your Reason score instead.`,
});

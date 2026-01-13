//@id=oyl6GBL5KDAI9bHs
//@name=Repel
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Repel`,
  flavorText: `They aren’t going anywhere, but you might!`,
  keywords: `Psionic, Ranged`,
  type: `Triggered`,
  distance: `Ranged 10`,
  target: `Self or one ally`,
  trigger: `The target takes damage or is force moved.`,
  effect: `The target takes half the triggering damage, or the distance of the triggering forced movement is reduced by a number of squares equal to your Reason score. If the target took damage and was force moved, you choose the effect. If the forced movement is reduced to 0 squares, the target can push the source of the forced movement a number of squares equal to your Reason score.`,
});

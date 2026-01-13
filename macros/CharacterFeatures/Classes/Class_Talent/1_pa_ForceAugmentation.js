//@id=VTy7iUOtSmnfaXWZ
//@name=Force Augmentation
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Force Augmentation`,
  description: `Your damage-dealing psionic abilities gain a +1 bonus to rolled damage.`,
  source: `Class`,
});

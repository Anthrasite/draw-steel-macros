//@id=SKUmBaTjZe7N49vi
//@name=Flashback
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Flashback`,
  flavorText: `The target is thrown several seconds back through time and gets to do it all again.`,
  resourceCost: 5,
  keywords: `Chronopathy, Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self or one ally`,
  effect: `The target uses an ability with a base Heroic Resource cost of 7 or lower that they’ve previously used this round, without needing to spend the base cost. Augmentations to the ability can be paid for as usual.`,
  strainedEffect: `You take 1d6 damage and are slowed (save ends).`,
});

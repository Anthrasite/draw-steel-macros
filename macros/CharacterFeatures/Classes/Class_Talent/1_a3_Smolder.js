//@id=fiqeXKdthECIgpoS
//@name=Smolder
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Smolder`,
  flavorText: `Smoke flows from your enemy like tears as their skin begins to blacken and flake.`,
  resourceCost: 3,
  keywords: `Psionic, Pyrokinesis, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Reason`,
  tier1Effect: `3 + R damage; R < WEAK, the target has weakness 5 (save ends)`,
  tier2Effect: `6 + R damage; R < AVERAGE, the target has weakness 5 (save ends)`,
  tier3Effect: `9 + R damage; R < STRONG, the target has weakness equal to 5 + your Reason score (save ends)`,
  effect: `Choose the damage type and the weakness for this ability from one of the following: acid, corruption, or fire. The target takes damage before this ability imposes any weakness.`,
});

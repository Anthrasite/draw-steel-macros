//@id=cbExiq152KOueHfo
//@name=Iron
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Iron`,
  flavorText: `The target’s skin turns to hard, dark metal, impenetrable and dense.`,
  resourceCost: 5,
  keywords: `Metamorphosis, Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self or one ally`,
  effect: `The target’s stability increases by an amount equal to your Reason score, and they gain 10 temporary Stamina and 2 surges. This stability increase lasts until the target no longer has temporary Stamina from this ability.`,
  strainedEffect: `You can’t use maneuvers (save ends).`,
});

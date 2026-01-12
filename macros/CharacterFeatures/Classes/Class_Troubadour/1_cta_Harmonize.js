//@id=DOEpRIxMiU0SbJF6
//@name=Harmonize
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Harmonize`,
  flavorText: `Give the chorus a little punch.`,
  resourceCost: 3,
  keywords: `Ranged`,
  type: `Triggered`,
  distance: `Ranged 5`,
  target: `One ally`,
  trigger: `The target uses an ability that targets only one enemy and costs 3 or fewer of their Heroic Resource.`,
  effect: `The target can choose one additional target for the triggering ability. Any damage dealt to the additional target is sonic damage.`,
  extraResourceCost: `1`,
  extraResourceEffect: `You can trigger this ability when a target uses an ability that has a Heroic Resource cost of 3 + each additional drama spent.`,
});

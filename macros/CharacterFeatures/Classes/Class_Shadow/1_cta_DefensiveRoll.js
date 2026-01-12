//@id=wOUnNKZHFsTgCryJ
//@name=Defensive Roll
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Defensive Roll`,
  flavorText: `When an enemy attacks, you roll with the impact to reduce the harm.`,
  keywords: `—`,
  type: `Triggered`,
  distance: `Self`,
  target: `Self`,
  trigger: `Another creature damages you.`,
  effect: `You take half the triggering damage, then can shift up to 2 squares after the triggering effect resolves. If you end this shift with concealment or cover, you can use the Hide maneuver even if you are observed.`,
  extraResourceCost: `1`,
  extraResourceEffect: `The potency of any effects associated with the damage are reduced by 1 for you.`,
});

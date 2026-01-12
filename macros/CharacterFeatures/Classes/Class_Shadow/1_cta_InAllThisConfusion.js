//@id=PH5sQgBKYW4UcyG2
//@name=In All This Confusion
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `In All This Confusion`,
  flavorText: `You vanish in a plume of black smoke to avoid danger.`,
  keywords: `Magic`,
  type: `Triggered`,
  distance: `Self`,
  target: `Self`,
  trigger: `You take damage.`,
  effect: `You take half the damage, then can teleport up to 4 squares after the triggering effect resolves.`,
  extraResourceCost: `1+`,
  extraResourceEffect: `You teleport 1 additional square for each insight spent.`,
});

//@id=HfjihePGx47Ln9Wq
//@name=Perfect Clarity
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Perfect Clarity`,
  flavorText: `You clear the mind of nothing but the goal.`,
  resourceCost: 5,
  keywords: `Psionic, Ranged, Telepathy`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self or one ally`,
  effect: `Until the start of your next turn, the target gains a +3 bonus to speed, and they have a double edge on the next power roll they make. If the target obtains a tier 3 outcome on that roll, you gain 1 clarity.`,
  strainedEffect: `You take 1d6 damage, and you can’t use triggered actions (save ends).`,
});

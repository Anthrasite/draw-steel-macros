//@id=WcGVo2RFDyf8iwtg
//@name=Inertia Soak
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Inertia Soak`,
  flavorText: `Your psionic energy surrounds the target and pushes everything else away from them.`,
  resourceCost: 5,
  keywords: `Psionic, Ranged, Telekinesis`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Self or one ally`,
  effect: `The target ignores difficult terrain and takes no damage from forced movement until the start of your next turn. Whenever the target enters a square while under this effect, they can push one adjacent creature up to a number of squares equal to your Reason score. When pushing an ally, the target can ignore that ally’s stability. A creature can only be force moved this way once a turn.`,
  strainedEffect: `You are weakened (save ends). While you are weakened this way, whenever you are force moved, the forced movement distance gains a +5 bonus.`,
});

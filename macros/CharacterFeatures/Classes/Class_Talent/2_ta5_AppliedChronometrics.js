//@id=V5BpRmlGYgujrxf8
//@name=Applied Chronometrics
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Applied Chronometrics`,
  flavorText: `Time slows down around you. Your heartbeat is the only gauge of the extra moments you’ve gained.`,
  resourceCost: 5,
  keywords: `Chronopathy, Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Special`,
  powerRollStat: `Presence`,
  tier1Effect: `You target two creatures, one of which can be you.`,
  tier2Effect: `You target three creatures, one of which can be you.`,
  tier3Effect: `You target four creatures, one of which can be you.`,
  effect: `Until the start of your next turn, each target gains a +5 bonus to speed, they can’t be made dazed, and they can use an additional maneuver on their turn. If a target is already dazed, that condition ends for them.`,
  strainedEffect: `Your speed is halved until the end of the encounter.`,
});

//@id=d6zhxK4NYsXrGoH3
//@name=Slow
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Slow`,
  flavorText: `Perhaps they wonder why everyone else is moving so quickly?`,
  resourceCost: 5,
  keywords: `Chronopathy, Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Three creatures or objects`,
  powerRollStat: `Presence`,
  tier1Effect: `The target’s speed is halved (save ends), or if P < WEAK, the target is slowed (save ends).`,
  tier2Effect: `The target is slowed (save ends), or if P < AVERAGE, the target’s speed is 0 (save ends).`,
  tier3Effect: `The target is slowed (save ends), or if P < STRONG, the target’s speed is 0 (save ends).`,
  effect: `A target can’t use triggered actions while their speed is reduced this way.`,
  strainedEffect: `The potency of this ability increases by 1 and you take 1d6 damage. At the start of each combat round while any target is affected by this ability, you take 1d6 damage. You can end the effect on all affected targets at any time (no action required).`,
});

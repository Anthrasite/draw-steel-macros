//@id=grXPQs5iVSFc0nTe
//@name=Violence Will Not Aid Thee
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Violence Will Not Aid Thee`,
  resourceCost: 3,
  flavorText: `After some holy lightning, your enemy will think twice about their next attack.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Intuition`,
  tier1Effect: `3 + I lightning damage`,
  tier2Effect: `6 + I lightning damage`,
  tier3Effect: `9 + I lightning damage`,
  effect: `The first time on a turn that the target deals damage to another creature, the target of this ability takes 1d10 lightning damage (save ends).`,
});

//@id=0ZmXTOcLg4NdHGPj
//@name=Harsh Critic
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Harsh Critic`,
  resourceCost: 3,
  flavorText: `Just one bad review will ruin their day.`,
  keywords: `Magic, Melee, Ranged, Strike`,
  type: `Main action`,
  distance: `Melee 1 or ranged 5`,
  target: `One creature or object`,
  powerRollStat: `Presence`,
  tier1Effect: `7 + P sonic damage`,
  tier2Effect: `10 + P sonic damage`,
  tier3Effect: `13 + P sonic damage`,
  effect: `The first time the target uses an ability before the start of your next turn, any effects from the ability’s tier outcomes other than damage are negated for all targets. Ability effects that always happen regardless of the power roll work as usual.`,
});

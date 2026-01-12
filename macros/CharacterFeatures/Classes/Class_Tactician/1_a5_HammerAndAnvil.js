//@id=m7wJd9YAXzBkgK8R
//@name=Hammer and Anvil
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hammer and Anvil`,
  flavorText: `“Let’s not argue about who’s the hammer and who’s the anvil!”`,
  resourceCost: 5,
  keywords: `Melee, Ranged, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1 or ranged 5`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `5 + M damage; one ally within 10 squares of you can use a strike signature ability against the target as a free triggered action`,
  tier2Effect: `9 + M damage; one ally within 10 squares of you can use a strike signature ability that gains an edge against the target as a free triggered action`,
  tier3Effect: `12 + M damage; two allies within 10 squares of you can each use a strike signature ability that gains an edge against the target as a free triggered action`,
  effect: `If the target is reduced to 0 Stamina before one or both chosen allies has made their strike, the ally or allies can pick a different target.`,
});

//@id=zgcmxfn8aIjU5qp0
//@name=En Garde!
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `En Garde!`,
  resourceCost: 5,
  flavorText: `Wait, it’s … Guard! Turn! Parry! Dodge! Spin! Thrust! Ha!`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Agility`,
  tier1Effect: `7 + A damage`,
  tier2Effect: `11 + A damage`,
  tier3Effect: `16 + A damage`,
  effect: `The target can make a melee free strike against you. If they do, you can make a melee free strike against the target.`,
});

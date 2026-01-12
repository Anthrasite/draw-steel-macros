//@id=tYlOH9gvDWRcL3JI
//@name=Sentenced
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Sentenced`,
  resourceCost: 5,
  flavorText: `The shock of your condemnation freezes your enemy in their boots.`,
  keywords: `Magic, Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Presence`,
  tier1Effect: `5 + P damage; P < WEAK, restrained (save ends)`,
  tier2Effect: `9 + P damage; P < AVERAGE, restrained (save ends)`,
  tier3Effect: `12 + P damage; P < STRONG, restrained (save ends)`,
  effect: `While the target is restrained this way, your abilities that impose forced movement can still move them.`,
});

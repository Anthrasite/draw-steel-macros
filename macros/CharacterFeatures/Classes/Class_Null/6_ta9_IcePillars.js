//@id=wjlxO3ZguJWRTIQe
//@name=Ice Pillars
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Ice Pillars`,
  flavorText: `Pillars of ice erupt from the ground and launch your foes into the air.`,
  resourceCost: 9,
  keywords: `Psionic, Ranged`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `Three creatures or objects`,
  powerRollStat: `Intuition`,
  tier1Effect: `Vertical slide 6`,
  tier2Effect: `Vertical slide 8`,
  tier3Effect: `Vertical slide 10`,
  effect: `The pillars vanish as soon as the effects of the forced movement are resolved.`,
});

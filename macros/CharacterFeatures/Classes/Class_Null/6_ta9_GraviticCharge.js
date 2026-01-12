//@id=ztyRMhrNT4wSfCFY
//@name=Gravitic Charge
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Gravitic Charge`,
  flavorText: `You channel your discipline into momentum that defies gravity.`,
  resourceCost: 9,
  keywords: `Psionic`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  powerRollStat: `Intuition`,
  tier1Effect: `Vertical slide 5`,
  tier2Effect: `Vertical slide 7`,
  tier3Effect: `Vertical slide 9`,
  effect: `This movement ignores stability. If you slide into another creature, you resolve damage to both of you as if your force movement had ended, but you keep moving through that creature’s space.`,
});

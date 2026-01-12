//@id=OY9n3WJ2LCKyd5pG
//@name=Faith Is Our Armor
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Faith Is Our Armor`,
  resourceCost: 5,
  flavorText: `The heroes’ armor glows with golden light, granting divine protection.`,
  keywords: `Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Four allies`,
  powerRollStat: `Intuition`,
  tier1Effect: `The target gains 5 temporary Stamina.`,
  tier2Effect: `The target gains 10 temporary Stamina.`,
  tier3Effect: `The target gains 15 temporary Stamina.`,
  effect: `You can target yourself instead of one ally with this ability.`,
});

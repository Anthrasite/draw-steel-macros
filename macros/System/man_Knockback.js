//@id=Oqx5g14i6Pla38pz
//@name=Knockback
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Knockback`,
  keywords: `Melee, Weapon`,
  type: `Maneuver`,
  distance: `Melee 1`,
  target: `One creature`,
  description: `A creature wanting to push an adjacent creature away from them can attempt to shove that creature using the following ability:`,
  powerRollStat: `Might`,
  tier1Effect: `Push 1`,
  tier2Effect: `Push 2`,
  tier3Effect: `Push 3`,
  effect: `You can usually target only creatures of your size or smaller. If your Might score is 2 or higher, you can target any creature with a size equal to or less than your Might score.`,
});

//@id=ZK5IBwkO3bRi6LJG
//@name=Impart Force
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Impart Force`,
  flavorText: `A single touch from you, and your enemy flies backward.`,
  resourceCost: 5,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Maneuver`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Intuition`,
  tier1Effect: `Push 3`,
  tier2Effect: `Push 5`,
  tier3Effect: `Push 7`,
  effect: `An object you target must be your size or smaller. You gain an edge on this ability. Additionally, for each square you push the target, they take 1 psychic damage.`,
  getExtraDamageFunc: async function(rollResult) {
    const defaultValue = rollResult.tier === 3 ? 7 : rollResult.tier === 2 ? 5 : 3;
    const squaresMoved = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Squares pushed`, label: `Squares the target was pushed`, allowNegative: false, defaultValue }));
    return squaresMoved > 0 ? ` + ${squaresMoved}` : undefined;
  },
});

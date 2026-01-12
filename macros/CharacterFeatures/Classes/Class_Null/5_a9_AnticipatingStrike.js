//@id=7sd9Ue2ZQY0PWET6
//@name=Anticipating Strike
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Anticipating Strike`,
  flavorText: `You suddenly strike an enemy, then grab them in a psionically enhanced grip.`,
  resourceCost: 9,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Free triggered`,
  distance: `Melee 1`,
  target: `One creature`,
  trigger: `The target moves or uses a main action.`,
  powerRollStat: `Agility`,
  tier1Effect: `7 + A damage; I < WEAK, restrained (save ends)`,
  tier2Effect: `10 + A damage; I < AVERAGE, restrained (save ends)`,
  tier3Effect: `13 + A damage; I < STRONG, restrained (save ends)`,
  effect: `This strike resolves before the triggering movement or main action.`,
});

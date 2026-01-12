//@id=a2tX6W9qPCgAmneM
//@name=Blood for Blood!
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Blood for Blood!`,
  resourceCost: 5,
  flavorText: `See how well they fight after you’ve bled them dry.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Might`,
  tier1Effect: `4 + M damage; M < WEAK, bleeding and weakened (save ends)`,
  tier2Effect: `6 + M damage; M < AVERAGE, bleeding and weakened (save ends)`,
  tier3Effect: `10 + M damage; M < STRONG, bleeding and weakened (save ends)`,
  effect: `You can deal 1d6 damage to yourself to deal an extra 1d6 damage to the target.`,
  getExtraDamageFunc: async function(rollResult) {
    const damageSelf = await Dialog.confirm({
      title: `Damage yourself?`,
      content: `<p>Deal damage to yourself to deal extra damage?</p>`
    });

    return damageSelf ? ` + 1d6` : undefined;
  },
});

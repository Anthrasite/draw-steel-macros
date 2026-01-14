//@id=qV8CDKtlHgQijYd0
//@name=Soul Burn
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Soul Burn`,
  flavorText: `You blast their soul out of their body, leaving it to helplessly float back to a weakened husk.`,
  resourceCost: 7,
  keywords: `Animapathy, Psionic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Presence`,
  tier1Effect: `6 + P damage; P < WEAK, dazed (save ends)`,
  tier2Effect: `10 + P damage; P < AVERAGE, dazed (save ends)`,
  tier3Effect: `14 + P damage; P < STRONG, dazed (save ends)`,
  effect: `The target takes a bane on Presence tests until the end of the encounter.`,
  strainedEffect: `The potency of this ability increases by 1. You take 2d6 damage and gain 3 surges that you can use immediately.`,
  beforeRollFunc: async function(rollResult) {
    const strained = (await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `resource` })).value - 7 < 0;
    if (strained)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 3, isDelta: true });
  },
});

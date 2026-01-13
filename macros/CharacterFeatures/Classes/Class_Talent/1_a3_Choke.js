//@id=07WnVKwxN4ZBg2Yl
//@name=Choke
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Choke`,
  flavorText: `You crush a foe in a telekinetic grip.`,
  resourceCost: 3,
  keywords: `Psionic, Ranged, Strike, Telekinesis`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Reason`,
  tier1Effect: `3 + R damage; M < WEAK, slowed (save ends)`,
  tier2Effect: `5 + R damage; M < AVERAGE, slowed (save ends)`,
  tier3Effect: `8 + R damage; M < STRONG, restrained (save ends)`,
  effect: `You can vertical pull the target up to 2 squares. If the target is made restrained by this ability, this forced movement ignores their stability.`,
});

//@id=PRkCdELuyNX69xKY
//@name=Optic Blast
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Optic Blast`,
  flavorText: `Your eyes emit rays of powerful enervating force.`,
  keywords: `Metamorphosis, Psionic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Reason`,
  tier1Effect: `2 + R damage; M < WEAK, prone`,
  tier2Effect: `4 + R damage; M < AVERAGE, prone`,
  tier3Effect: `6 + R damage; M < STRONG, prone`,
  effect: `When targeting an object with a solid reflective surface or a creature carrying or wearing such an object (such as a mirror, an unpainted metal shield, or shiny metal plate armor), you can target one additional creature or object within 3 squares of the first target.`,
  strainedEffect: `You gain 1 surge that you can use immediately, and you take damage equal to your Reason score that can’t be reduced in any way.`,
  beforeRollFunc: async function(rollResult) {
    const strained = (await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `resource` })).value < 0;
    if (strained)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 1, isDelta: true });
  },
});

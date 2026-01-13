//@id=JdHMbrVYtl98njX5
//@name=Precognition
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Precognition`,
  flavorText: `You give a target a glimpse into the future so that they’re ready for what comes next.`,
  resourceCost: 3,
  keywords: `Chronopathy, Melee, Psionic`,
  type: `Main action`,
  distance: `Melee 2`,
  target: `Self or one ally`,
  effect: `Ability rolls made against the target take a bane until the start of your next turn. Whenever the target takes damage while under this effect, they can use a triggered action to make a free strike against the source of the damage.`,
});

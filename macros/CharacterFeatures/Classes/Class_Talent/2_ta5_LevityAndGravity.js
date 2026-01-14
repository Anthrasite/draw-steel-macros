//@id=TYqPFCsrNupxntm6
//@name=Levity and Gravity
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Levity and Gravity`,
  flavorText: `You raise the target slightly into the air, then smother them against the ground.`,
  resourceCost: 5,
  keywords: `Psionic, Ranged, Strike, Telekinesis`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Reason`,
  tier1Effect: `6 + R damage; M < WEAK, prone`,
  tier2Effect: `10 + R damage; M < AVERAGE, prone`,
  tier3Effect: `14 + R damage; M < STRONG, prone and can’t stand (save ends)`,
  strainedEffect: `You take half the damage the target takes.`,
});

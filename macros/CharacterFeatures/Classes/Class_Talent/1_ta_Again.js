//@id=EnBLHhYCzZNy47Pp
//@name=Again
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Again`,
  flavorText: `You step back a split second to see if things play out a little differently.`,
  keywords: `Psionic, Ranged`,
  type: `Triggered`,
  distance: `Ranged 10`,
  target: `Self or one creature`,
  trigger: `The target makes an ability roll.`,
  effect: `You can use this ability after seeing the result of the triggering roll. The target must reroll the power roll and use the new roll.`,
});

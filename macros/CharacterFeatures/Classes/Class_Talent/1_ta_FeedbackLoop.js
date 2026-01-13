//@id=Hy3RYSU6fu5vKjG8
//@name=Feedback Loop
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Feedback Loop`,
  flavorText: `Creating a brief psychic link between an enemy and their target gives that foe a taste of their own medicine.`,
  keywords: `Psionic, Ranged`,
  type: `Triggered`,
  distance: `Ranged 10`,
  target: `One creature`,
  trigger: `The target deals damage to an ally.`,
  effect: `The target takes psychic damage equal to half the triggering damage.`,
});

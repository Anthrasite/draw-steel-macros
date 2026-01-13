//@id=iJxtXQM38FbjmIRg
//@name=Entropy Ward
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Entropy Ward`,
  description: `Your ward slows time for your enemies. Whenever a creature deals damage to you, their speed is reduced by an amount equal to your Reason score and they can’t use triggered actions until the end of their next turn.`,
  source: `Class`,
});

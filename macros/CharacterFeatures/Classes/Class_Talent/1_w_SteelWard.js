//@id=kbu9TeJr8ZOHXvpC
//@name=Steel Ward
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Steel Ward`,
  description: `Your ward reacts to danger, protecting you from future harm. Whenever you take damage, after the damage resolves, you gain damage immunity equal to your Reason score until the end of your next turn.`,
  source: `Class`,
});

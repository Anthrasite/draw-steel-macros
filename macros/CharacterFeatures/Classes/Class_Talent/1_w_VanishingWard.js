//@id=dZhSa1Xkob4l3H6R
//@name=Vanishing Ward
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Vanishing Ward`,
  description: `Your ward allows you to slip away from threats. Whenever you take damage, you become invisible until the end of your next turn.`,
  source: `Class`,
});

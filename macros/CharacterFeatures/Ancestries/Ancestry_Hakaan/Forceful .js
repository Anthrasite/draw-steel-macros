//@id=6BCyxu2jDOAPGvbM
//@name=Forceful
//@img=icons/magic/earth/strike-fist-stone.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Forceful`,
  description: `Whenever you force move a creature or object, the forced movement distance gains a +1 bonus.`,
  source: `Ancestry`,
});

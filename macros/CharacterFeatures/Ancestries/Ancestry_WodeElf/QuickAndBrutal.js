//@id=ewMkVNr3gQdaJL48
//@name=Quick and Brutal
//@img=icons/magic/nature/tree-twisted-glow-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Quick and Brutal`,
  description: `Whenever you score a critical hit, you can take an additional main action and an additional move action instead of just a main action.`,
  source: `Ancestry`,
});

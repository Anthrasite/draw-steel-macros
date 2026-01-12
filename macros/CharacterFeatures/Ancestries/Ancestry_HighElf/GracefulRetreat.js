//@id=FnuCKfbNchyUYT2D
//@name=Graceful Retreat
//@img=icons/environment/settlement/watchtower-cliff.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Graceful Retreat`,
  description: `You gain a +1 bonus to the distance you can shift when you take the Disengage move action.`,
  source: `Ancestry`,
});

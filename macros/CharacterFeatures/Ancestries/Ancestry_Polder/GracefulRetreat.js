//@id=GYdjbcMSehyWrgPo
//@name=Graceful Retreat
//@img=icons/magic/light/orbs-hand-gray.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Graceful Retreat",
  description: `Your small size makes it easier for you to slip away from the fray. You gain a +1 bonus to the distance you can shift when you take the Disengage move action.`,
  source: "Ancestry"
});

//@id=KvUimPkReWXZ5gpA
//@name=Prayer of Speed
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Prayer of Speed",
  description: `Your god blesses your flesh and infuses it with divine quickness. You gain a +1 bonus to speed and to the distance you can shift when you take the Disengage move action.`,
  source: "Class"
});

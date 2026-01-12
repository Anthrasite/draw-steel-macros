//@id=J50Zdva3souN9rOY
//@name=Prayer of Destruction
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Prayer of Destruction`,
  description: `Your god infuses wrath within your being. You gain a +1 bonus to rolled damage with magic abilities.`,
  source: `Class`,
});

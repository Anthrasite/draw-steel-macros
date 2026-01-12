//@id=WX4Nm1vPbhDoVuUt
//@name=Windwalk
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Windwalk`,
  description: `While you have 5 or more Victories, you can fly. If you can already fly, you have a +2 bonus to speed while flying instead.`,
  source: `Class`,
});

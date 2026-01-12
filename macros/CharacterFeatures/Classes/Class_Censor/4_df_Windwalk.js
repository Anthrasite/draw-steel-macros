//@id=6XNp5qT3FuwmnJla
//@name=Windwalk
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Windwalk`,
  description: `While you have 5 or more Victories, you can fly. If you can already fly, you have a +2 bonus to speed while flying instead.`,
  source: `Class`,
});

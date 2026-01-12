//@id=VicA7KUhI9S4ypEY
//@name=Blessed Domain
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Blessed Domain`,
  description: `Whenever you gain piety from a domain feature, you gain 1 additional piety.`,
  source: `Class`,
});

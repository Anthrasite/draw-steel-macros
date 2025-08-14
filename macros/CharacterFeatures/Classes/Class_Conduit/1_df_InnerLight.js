//@id=Hx3IVBJ9iCjSe0oM
//@name=Inner Light
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Inner Light",
  description: `Each time you finish a respite, you can choose yourself or one ally who is also finishing a respite to gain the benefit of a divine ritual. You place a ray of morning light into the chosen character’s soul, granting them a +1 bonus to saving throws that lasts until you finish another respite.`,
  source: "Class"
});

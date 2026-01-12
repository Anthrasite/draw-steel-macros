//@id=AsH6ry08pF4ulYQf
//@name=Return to Formlessness
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Return to Formlessness`,
  flavorText: `With the merest touch, you cause an object to turn to slag or ash.`,
  keywords: `Fire, Magic, Melee`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One mundane object`,
  effect: `You heat the target and cause it to melt or combust, destroying it. If the object is larger than 1 square, then only the square of the object you touch is destroyed.`
});

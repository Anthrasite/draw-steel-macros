//@id=kbCA42dKDFsiTju7
//@name=Quaking Earth
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Quaking Earth",
  description: "While you have 3 or more essence and are not dying, you exude an aura of magic whose distance is equal to your Reason score. At the end of each of your turns, you can push each enemy in the area up to a number of squares equal to your Reason score.",
  source: "Class"
});

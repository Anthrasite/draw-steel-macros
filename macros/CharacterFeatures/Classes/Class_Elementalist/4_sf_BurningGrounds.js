//@id=8jfdphz6UVeJw1vb
//@name=Burning Grounds
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Burning Grounds",
  description: "While you have 3 or more essence and are not dying, you exude an aura of magic whose distance is equal to your Reason score. At the end of each of your turns, each enemy in the area takes fire damage equal to your Reason score.",
  source: "Class"
});

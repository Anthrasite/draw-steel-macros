//@id=TkXNAM3Dh861mIYi
//@name=Oracular Visions
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Oracular Visions",
  description: `Your deity rewards you with hazy visions of things to come. Each time you earn 1 or more Victories, you earn an equal number of fate points. Whenever you or a creature within 10 squares makes a test, you can spend 1 fate point to tap into a vision of the outcome, granting that creature an edge on the test. You lose any remaining fate points when you finish a respite.`,
  source: "Class"
});

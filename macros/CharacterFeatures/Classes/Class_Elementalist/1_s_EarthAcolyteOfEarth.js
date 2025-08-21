//@id=wAkLju6RoaDZiIfW
//@name=Earth: Acolyte of Earth
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Earth: Acolyte of Earth",
  description: "You harness the flow of earth magic to become harder to move. Whenever you use an ability that has the Earth and Magic keywords, your stability increases by 1 until the start of your next turn. This benefit is cumulative.",
  source: "Class"
});

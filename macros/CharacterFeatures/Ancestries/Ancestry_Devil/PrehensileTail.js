//@id=4r6bamXnC1L9VBUp
//@name=Prehensile Tail
//@img=modules/draw-steel-playtest-macros/icons/ancestry/devil.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Prehensile Tail",
  description: "Your prehensile tail allows you to challenge foes on all sides. You can’t be flanked.",
  source: "Ancestry"
});

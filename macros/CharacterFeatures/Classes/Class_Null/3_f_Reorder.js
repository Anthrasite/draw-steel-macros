//@id=rBJZfR7w4FD2EH13
//@name=Reorder
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Reorder",
  description: `At the start of each of your turns, you can use a free triggered action to end one effect on you that is ended by a saving throw or that ends at the end of your turn. Alternatively, you can grant this benefit to one creature in the area of your Null Field ability.`,
  source: "Class"
});

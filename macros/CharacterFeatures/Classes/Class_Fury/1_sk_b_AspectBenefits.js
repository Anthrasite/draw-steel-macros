//@id=ujcSAIBPqY8QGd1R
//@name=Aspect Benefits
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Aspect Benefits",
  description: `Whenever you use forced movement to push a creature, you can pull that creature instead. Whenever you pull a creature adjacent to you and that creature has m<v , you can use a free triggered action to make that creature grabbed by you.`,
  source: "Class"
});

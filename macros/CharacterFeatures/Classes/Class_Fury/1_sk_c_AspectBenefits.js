//@id=EI1a64Z2beoGl9jW
//@name=Aspect Benefits
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Aspect Benefits",
  description: `You gain an edge on tests made to hide and sneak. Additionally, whenever you fall, you can use a free triggered action to use your Aspect of the Wild ability.`,
  source: "Class"
});

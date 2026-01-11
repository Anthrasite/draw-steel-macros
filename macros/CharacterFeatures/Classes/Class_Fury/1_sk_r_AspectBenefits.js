//@id=Z6f37sMle1NDAYLq
//@name=Aspect Benefits
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Aspect Benefits",
  description: `You gain an edge on tests made to hide and sneak. Additionally, you ignore difficult terrain.`,
  source: "Class"
});

//@id=GfORX0IYQDiWxwAu
//@name=Goaded
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Goaded",
  description: `You have learned to leverage your marked foes’ psychology and goad them into acting before they’re tactically ready. Whenever a creature marked by you uses a strike that targets you or any ally within your line of effect, you can use a free triggered action to change one target of the strike to you or another ally within your line of effect. The new target must be within distance of the ability and within line of effect of the creature using it.`,
  source: "Class"
});

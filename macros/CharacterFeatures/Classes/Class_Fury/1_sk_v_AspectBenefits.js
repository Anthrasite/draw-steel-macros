//@id=FzjstaRWELhdwP0G
//@name=Aspect Benefits
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Aspect Benefits",
  description: `Whenever you use the Knockback maneuver, you can then use the Aid Attack maneuver as a free triggered action.`,
  source: "Class"
});

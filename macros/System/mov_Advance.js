//@id=19NMQ6ayvlRtVjs3
//@name=Advance
//@img=icons/skills/movement/feet-winged-sandals-tan.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Advance`,
  type: `Move action`,
  description: `When a creature takes the Advance move action, they move a number of squares up to their speed. They can break up this movement with their maneuver and main action however they wish.`,
});

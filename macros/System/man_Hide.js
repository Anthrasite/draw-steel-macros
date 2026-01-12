//@id=PHi2AedhUQsOYpXB
//@name=Hide
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hide`,
  type: `Maneuver`,
  description: `Using the Hide maneuver, a creature attempts to hide from other creatures who aren’t observing them while they have cover or concealment.`
});

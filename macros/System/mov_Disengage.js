//@id=Q6VlRcYv3CgZHnir
//@name=Disengage
//@img=icons/skills/movement/feet-winged-sandals-tan.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Disengage",
  type: "Move Action",
  description: `When a creature takes the Disengage move action, they can shift 1 square. Certain class features, kits, and other rules allow a creature to shift more than 1 square when they disengage. A creature who does so can break up their shift with their maneuver and action however they wish.`
});

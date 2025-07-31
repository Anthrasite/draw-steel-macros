//@id=Hg4cXiPuwqJ7KROU
//@name=Ride
//@img=icons/skills/movement/feet-winged-sandals-tan.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Ride",
  type: "Move Action",
  description: `A creature can take the Ride move action only while mounted on another creature. When a creature takes the Ride move action, they cause their mount to move up to the mount’s speed, taking the rider with them. Alternatively, a creature can use the Ride move action to have their mount use the Disengage move action as a free triggered action. A creature can use the Ride move action only once per round.`
});

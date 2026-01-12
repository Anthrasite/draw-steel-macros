//@id=Qa3uGBZ2JSNgC7he
//@name=Stand Up
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Stand Up`,
  type: `Maneuver`,
  description: `A creature can use the Stand Up maneuver to stand up if they are prone, ending that condition. Alternatively, they can use this maneuver to make a willing adjacent prone creature stand up.`
});

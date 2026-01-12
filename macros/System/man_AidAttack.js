//@id=ZvwnrSOEda3k5Mzq
//@name=Aid Attack
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Aid Attack`,
  type: `Maneuver`,
  description: `A creature who uses the Aid Attack maneuver chooses an enemy adjacent to them. The next ability roll an ally makes against that enemy before the start of the aiding creature’s next turn gains an edge.`
});

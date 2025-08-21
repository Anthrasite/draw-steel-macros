//@id=S92wHCQ5uFqpgx8O
//@name=Shared Void Sense
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Shared Void Sense",
  flavorText: "You grant allies a taste of your unearthly vision.",
  keywords: "Magic, Ranged, Void",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Special",
  effect: "For each Victory you have, you can target one creature. Each target gains the benefit of your A Beyonding of Vision feature until the end of your next turn, but doesn’t gain the use of the Shared Void Sense ability."
});

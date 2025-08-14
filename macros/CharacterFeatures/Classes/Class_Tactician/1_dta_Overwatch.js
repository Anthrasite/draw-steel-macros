//@id=6CYc8e3QP7dLHJMA
//@name=Overwatch
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Overwatch",
  flavorText: "Under your direction, an ally waits for just the right moment to strike.",
  keywords: "Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "One creature",
  trigger: "The target moves.",
  effect: "At any time during the target’s movement, one ally can make a free strike against them.",
  extraResourceCost: "1",
  extraResourceEffect: "If the target has R < AVERAGE, they are slowed (EoT)."
});

//@id=B3pqxnwFZWkaX9Mo
//@name=Lines of Force
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Lines of Force",
  flavorText: "You redirect the energy of motion.",
  keywords: "Magic, Melee",
  type: "Triggered",
  distance: "Melee 1",
  target: "Self or one creature",
  trigger: "The target would be force moved.",
  effect: "You can select a new target of the same size or smaller within distance to be force moved instead. You become the source of the forced movement, determine the new target’s destination, and can push the target instead of using the original forced movement type. Additionally, the forced movement distance gains a bonus equal to your Might score.",
  extraResourceCost: "1",
  extraResourceEffect: "The forced movement distance gains a bonus equal to twice your Might score instead."
});

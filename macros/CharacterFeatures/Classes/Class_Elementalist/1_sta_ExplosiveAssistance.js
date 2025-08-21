//@id=dyK1UlEemj80c2q4
//@name=Explosive Assistance
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Explosive Assistance",
  flavorText: "You add a little magic to an ally’s aggression at just the right time.",
  keywords: "Fire, Magic, Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "Self or one ally",
  trigger: "The target force moves a creature or object.",
  effect: "The forced movement distance gains a bonus equal to your Reason score.",
  extraResourceCost: "1",
  extraResourceEffect: "The forced movement distance gains a bonus equal to twice your Reason score instead."
});

//@id=q8jIQkmTxWn7dAge
//@name=Inertial Shield
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Inertial Shield",
  flavorText: "You intuit the course of an incoming attack, reducing its effects.",
  keywords: "Psionic",
  type: "Triggered",
  distance: "Self",
  target: "Self",
  trigger: "You take damage.",
  effect: `You take half the damage.`,
  extraResourceCost: "1",
  extraResourceEffect: "The potency of one effect associated with the damage is reduced by 1 for you.",
});

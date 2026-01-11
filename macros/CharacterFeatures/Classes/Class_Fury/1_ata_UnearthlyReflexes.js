//@id=Y6sBhXWvmblHA1qe
//@name=Unearthly Reflexes
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Unearthly Reflexes",
  flavorText: "You are as elusive as a hummingbird.",
  keywords: "—",
  type: "Triggered",
  distance: "Self",
  target: "Self",
  trigger: "You take damage.",
  effect: "You take half the damage from the triggering effect and can shift up to a number of squares equal to your Agility score.",
  extraResourceCost: "1",
  extraResourceEffect: "If the damage has any potency effects associated with it, the potency is reduced by 1 for you."
});

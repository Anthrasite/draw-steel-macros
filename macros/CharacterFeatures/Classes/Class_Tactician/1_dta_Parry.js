//@id=hqZlO8kc6VHibNdB
//@name=Parry
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Parry",
  flavorText: "Your quick reflexes cost an enemy the precision they seek.",
  keywords: "Melee, Weapon",
  type: "Triggered",
  distance: "Melee 2",
  target: "Self or one ally",
  trigger: "A creature deals damage to the target.",
  effect: "You can shift 1 square. If the target is you, or if you end this shift adjacent to the target, the target takes half the damage. If the damage has any potency effect associated with it, the potency is decreased by 1.",
  extraResourceCost: "1",
  extraResourceEffect: "This ability’s distance becomes Melee 1 + your Reason score, and you can shift up to a number of squares equal to your Reason score instead of 1 square."
});

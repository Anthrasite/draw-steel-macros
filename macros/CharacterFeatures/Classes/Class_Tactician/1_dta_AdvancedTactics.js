//@id=DuAwWal4fNIFCb6z
//@name=Advanced Tactics
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Advanced Tactics",
  flavorText: "Your leadership aids an ally.",
  keywords: "Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "One ally",
  trigger: "The target deals damage to another creature.",
  effect: "The target gains 2 surges, which they can use on the triggering damage.",
  extraResourceCost: "1",
  extraResourceEffect: "If the damage has any potency effect associated with it, the potency is increased by 1."
});

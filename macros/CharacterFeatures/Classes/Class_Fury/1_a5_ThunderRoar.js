//@id=t76IPL0ZpRdUfTkh
//@name=Thunder Roar
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Thunder Roar",
  resourceCost: 5,
  flavorText: "You unleash a howl that hurls your enemies back.",
  keywords: "Area, Melee, Weapon",
  type: "Main action",
  distance: "5 × 1 line within 1",
  target: "Each enemy in the area",
  powerRollStat: "Might",
  tier1Effect: "6 damage; push 2",
  tier2Effect: "9 damage; push 4",
  tier3Effect: "13 damage; push 6",
  effect: "The targets are force moved one at a time, starting with the target nearest to you, and can be pushed into other targets in the same line."
});

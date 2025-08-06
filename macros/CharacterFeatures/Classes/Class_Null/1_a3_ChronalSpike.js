//@id=VL8nTYUBIe6z9yC5
//@name=Chronal Spike
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Chronal Spike",
  flavorText: "You foresee the best moment to strike, then exploit it.",
  resourceCost: 3,
  keywords: "Melee, Psionic, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Agility",
  tier1Effect: "7 + A damage",
  tier2Effect: "10 + A damage",
  tier3Effect: "13 + A damage",
  effect: "You can shift up to half your speed before or after you make this strike. Additionally, whenever an effect lets you make a free strike or use a signature ability, you can use this ability instead, paying its discipline cost as usual."
});

//@id=OpIeWz63qvCR21ak
//@name=Stunning Blow
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Stunning Blow",
  flavorText: "You focus your psionic technique into a concussive punch.",
  resourceCost: 3,
  keywords: "Melee, Psionic, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Agility",
  tier1Effect: "4 + A damage; I < WEAK, dazed and slowed (save ends)",
  tier2Effect: "5 + A damage; I < AVERAGE, dazed and slowed (save ends)",
  tier3Effect: "7 + A damage; I < STRONG, dazed and slowed (save ends)"
});

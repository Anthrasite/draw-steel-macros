//@id=lLHzYeoCv3IPfM7d
//@name=Quick Rewrite
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Quick Rewrite",
  resourceCost: 3,
  flavorText: "You write something unexpected into the scene that hinders your enemy.",
  keywords: "Area, Magic, Ranged",
  type: "Main action",
  distance: "3 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Presence",
  tier1Effect: "4 damage; P < WEAK, slowed (save ends)",
  tier2Effect: "5 damage; P < AVERAGE, slowed (save ends)",
  tier3Effect: "6 damage; P < STRONG, restrained (save ends)",
  effect: "The area is difficult terrain for enemies.",
});

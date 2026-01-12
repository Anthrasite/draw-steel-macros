//@id=QPWYtT32s9R4Zbzr
//@name=Artful Flourish
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Artful Flourish",
  flavorText: "And they said practicing fencing was a waste!",
  keywords: "Melee, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "Two creatures or objects",
  powerRollStat: "Agility",
  tier1Effect: "2 damage",
  tier2Effect: "5 damage",
  tier3Effect: "7 damage",
  effect: "You can shift up to 3 squares.",
  extraResourceCost: "2+",
  extraResourceEffect: "You can target one additional creature or object for every 2 drama spent.",
});

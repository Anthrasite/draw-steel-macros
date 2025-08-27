//@id=GFHbQozJMUcYfsu4
//@name=Fear of the Gods
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Fear of the Gods",
  resourceCost: 7,
  flavorText: "Your divine magic makes a creature appear as what your enemies fear most.",
  keywords: "Area, Magic, Ranged",
  type: "Main action",
  distance: "5 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Intuition",
  tier1Effect: "6 psychic damage; I < WEAK, frightened (save ends)",
  tier2Effect: "9 psychic damage; I < AVERAGE, frightened (save ends)",
  tier3Effect: "13 psychic damage; I < STRONG, frightened (save ends)",
  effect: "Each target is frightened of you or a creature you choose within distance."
});

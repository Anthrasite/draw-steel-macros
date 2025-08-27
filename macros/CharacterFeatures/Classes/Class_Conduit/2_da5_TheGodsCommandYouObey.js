//@id=85BW9nSLp2lXgQyI
//@name=The Gods Command You Obey
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "The Gods Command You Obey",
  resourceCost: 5,
  flavorText: "You speak with the voice of your saint, commanding your enemies.",
  keywords: "Magic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Intuition",
  tier1Effect: "4 + I holy damage; P < WEAK, before taking damage, the target makes a free strike against a target you choose",
  tier2Effect: "7 + I holy damage; P < AVERAGE, before taking damage, the target uses an ability of your choice and you choose any targets for that ability",
  tier3Effect: "11 + I holy damage; P < STRONG, before taking damage, the target shifts up to their speed to a location you choose, uses an ability of your choice, and you choose any targets for that ability"
});

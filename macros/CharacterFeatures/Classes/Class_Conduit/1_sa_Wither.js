//@id=ih3OTR7d9AD6MxX8
//@name=Wither
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Wither`,
  flavorText: `A bolt of holy energy saps the life from a foe.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Intuition`,
  tier1Effect: `3 + I corruption damage; P < WEAK, the target takes a bane on their next power roll`,
  tier2Effect: `5 + I corruption damage; P < AVERAGE, the target takes a bane on their next power roll`,
  tier3Effect: `8 + I corruption damage; P < STRONG, the target takes a bane on their next power roll`,
});

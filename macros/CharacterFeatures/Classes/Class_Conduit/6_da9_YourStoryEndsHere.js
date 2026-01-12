//@id=KT8VkWNGzbiYuXtg
//@name=Your Story Ends Here
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Your Story Ends Here`,
  resourceCost: 9,
  flavorText: `You bend the fate of a foe, willing them to die.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Intuition`,
  tier1Effect: `9 + I corruption damage; R < WEAK, weakened (save ends)`,
  tier2Effect: `14 + I corruption damage; R < AVERAGE, weakened (save ends)`,
  tier3Effect: `19 + I corruption damage; R < STRONG, weakened (save ends)`,
  effect: `If this damage kills the target, you and each ally within distance can spend a Recovery.`,
});

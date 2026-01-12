//@id=qUYfXWyBZrTdQjF5
//@name=Drain
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Drain`,
  flavorText: `You drain the energy from your target to revitalize yourself or an ally.`,
  keywords: `Magic, Melee, Strike`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Intuition`,
  tier1Effect: `2 + I corruption damage`,
  tier2Effect: `5 + I corruption damage`,
  tier3Effect: `7 + I corruption damage`,
  effect: `You or one ally within distance can spend a Recovery.`,
});

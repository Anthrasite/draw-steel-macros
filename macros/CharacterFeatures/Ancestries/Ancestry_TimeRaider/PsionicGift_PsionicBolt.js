//@id=CGXjaDqOBF5Qc4gH
//@name=Psionic Bolt
//@img=icons/magic/symbols/star-rising-purple.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Psionic Bolt`,
  flavorText: `You shoot forth a purple beam of psychic force that moves your target.`,
  keywords: `Psionic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Reason, Intuition, or Presence`,
  tier1Effect: `2 + R, I, or P psychic damage; slide 1`,
  tier2Effect: `5 + R, I, or P psychic damage; slide 2`,
  tier3Effect: `7 + R, I, or P psychic damage; slide 3`,
});

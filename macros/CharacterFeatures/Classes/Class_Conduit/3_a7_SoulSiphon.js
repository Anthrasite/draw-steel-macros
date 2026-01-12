//@id=bMspxkC3eGc7oXNK
//@name=Soul Siphon
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Soul Siphon`,
  resourceCost: 7,
  flavorText: `A beam of energy connects a foe to a friend, draining life from one to heal the other.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One enemy`,
  powerRollStat: `Intuition`,
  tier1Effect: `7 + I corruption damage`,
  tier2Effect: `10 + I corruption damage`,
  tier3Effect: `15 + I corruption damage`,
  effect: `One ally within distance can spend any number of Recoveries.`,
});

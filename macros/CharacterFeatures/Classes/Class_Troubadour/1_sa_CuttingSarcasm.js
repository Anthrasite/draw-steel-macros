//@id=d2jeUZtNXJKG1EiC
//@name=Cutting Sarcasm
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Cutting Sarcasm`,
  flavorText: `There you are, radiating your usual charisma.`,
  keywords: `Magic, Ranged, Strike, Weapon`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Presence`,
  tier1Effect: `2 + P psychic damage; P < WEAK, bleeding (save ends)`,
  tier2Effect: `5 + P psychic damage; P < AVERAGE, bleeding (save ends)`,
  tier3Effect: `7 + P psychic damage; P < STRONG, bleeding (save ends)`,
});

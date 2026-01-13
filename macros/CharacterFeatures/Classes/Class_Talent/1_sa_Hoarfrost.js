//@id=qdesFxVTutliwEUj
//@name=Hoarfrost
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hoarfrost`,
  flavorText: `You blast a foe with a pulse of cold energy.`,
  keywords: `Cryokinesis, Psionic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Reason`,
  tier1Effect: `2 + R cold damage; M < WEAK, slowed (EoT)`,
  tier2Effect: `4 + R cold damage; M < AVERAGE, slowed (EoT)`,
  tier3Effect: `6 + R cold damage; M < STRONG, slowed (EoT)`,
  strainedEffect: `You are slowed until the end of your next turn. Additionally, a target slowed by this ability is restrained instead.`,
});

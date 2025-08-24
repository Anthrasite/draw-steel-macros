//@id=YUMiOTG948XwR6Hd
//@name=I’ve Got Your Back
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "I’ve Got Your Back",
  flavorText: "Your enemy will think twice about attacking your friend.",
  resourceCost: 5,
  keywords: "Ranged, Strike, Weapon",
  type: "Main action",
  distance: "Ranged 5",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "5 + R damage; taunted (EoT)",
  tier2Effect: "9 + R damage; taunted (EoT)",
  tier3Effect: "12 + R damage; taunted (EoT)",
  effect: `One ally adjacent to the target can spend a Recovery.`
});

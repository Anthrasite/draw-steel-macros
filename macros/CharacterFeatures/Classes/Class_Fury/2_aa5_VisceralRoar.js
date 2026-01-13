//@id=pujkbiD7yAQ8B0mc
//@name=Visceral Roar
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Visceral Roar`,
  resourceCost: 5,
  flavorText: `The sound of the storm within you staggers your opponents.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `2 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Might`,
  tier1Effect: `2 damage; push 1; M < WEAK, dazed (save ends)`,
  tier2Effect: `5 damage; push 2; M < AVERAGE, dazed (save ends)`,
  tier3Effect: `7 damage; push 3; M < STRONG, dazed (save ends)`,
  effect: `This ability deals your primordial damage type.`,
});

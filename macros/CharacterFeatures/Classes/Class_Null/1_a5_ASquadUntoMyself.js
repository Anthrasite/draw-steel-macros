//@id=Cd9NBUbnkt83jL62
//@name=A Squad Unto Myself
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `A Squad Unto Myself`,
  flavorText: `You move so quickly, it seems as though an army assaulted your foes.`,
  resourceCost: 5,
  keywords: `Area, Psionic, Weapon`,
  type: `Main action`,
  distance: `2 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Agility`,
  tier1Effect: `6 damage`,
  tier2Effect: `9 damage`,
  tier3Effect: `13 damage`,
  effect: `You can take the Disengage move action as a free maneuver before or after you use this ability.`,
});

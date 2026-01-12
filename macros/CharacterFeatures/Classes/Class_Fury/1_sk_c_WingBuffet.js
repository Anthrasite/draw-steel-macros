//@id=9ikQxgnqaEXjebKh
//@name=Wing Buffet
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Wing Buffet`,
  flavorText: `Foes who try to close in around you do so at their peril.`,
  keywords: `Area, Melee, Weapon`,
  type: `Main action`,
  distance: `1 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Agility`,
  tier1Effect: `3 damage`,
  tier2Effect: `6 damage`,
  tier3Effect: `8 damage`,
  effect: `You can shift up to 2 squares before or after making the power roll.`,
});

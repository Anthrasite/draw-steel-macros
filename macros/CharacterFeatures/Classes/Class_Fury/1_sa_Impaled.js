//@id=g6PFo0QWCwNMkf9V
//@name=Impaled!
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Impaled!`,
  flavorText: `You skewer your enemy like a boar upon a spit.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature of your size or smaller`,
  powerRollStat: `Might`,
  tier1Effect: `2 + M damage; M < WEAK, grabbed`,
  tier2Effect: `5 + M damage; M < AVERAGE, grabbed`,
  tier3Effect: `7 + M damage; M < STRONG, grabbed`,
});

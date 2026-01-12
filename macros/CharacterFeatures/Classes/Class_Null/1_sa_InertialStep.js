//@id=6hiJoFuq82al3VBr
//@name=Inertial Step
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Inertial Step`,
  flavorText: `You flit about the battlefield and take an opportunistic strike.`,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Agility`,
  tier1Effect: `5 + A damage`,
  tier2Effect: `7 + A damage`,
  tier3Effect: `10 + A damage`,
  effect: `You can shift up to half your speed before or after you make this strike.`,
});

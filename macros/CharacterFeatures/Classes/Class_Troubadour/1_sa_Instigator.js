//@id=Ix8rRgUqTpnwGavM
//@name=Instigator
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Instigator`,
  flavorText: `I didn’t do it! What?`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Presence`,
  tier1Effect: `3 + P damage`,
  tier2Effect: `6 + P damage`,
  tier3Effect: `9 + P damage`,
  effect: `The target is taunted by you or a willing ally adjacent to you until the end of the target’s next turn.`,
});

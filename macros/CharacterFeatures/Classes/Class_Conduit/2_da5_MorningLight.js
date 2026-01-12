//@id=e0Yf2HiUITAh3E89
//@name=Morning Light
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Morning Light`,
  resourceCost: 5,
  flavorText: `Light shines at your command, burning your foes and blessing your allies.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `3 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Intuition`,
  tier1Effect: `4 fire damage`,
  tier2Effect: `6 fire damage`,
  tier3Effect: `10 fire damage`,
  effect: `Each ally in the area deals fire damage equal to your Intuition score with their next strike made before the end of their next turn.`,
});

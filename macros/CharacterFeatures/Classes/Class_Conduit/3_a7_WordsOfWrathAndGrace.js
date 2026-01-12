//@id=Fcn5WaURO93e24hN
//@name=Words of Wrath and Grace
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Words of Wrath and Grace`,
  resourceCost: 7,
  flavorText: `Your saint grants your enemies a vision of pain and fills your allies with healing energy.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `5 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Intuition`,
  tier1Effect: `2 holy damage`,
  tier2Effect: `5 holy damage`,
  tier3Effect: `7 holy damage`,
  effect: `Each ally in the area can spend a Recovery.`,
});

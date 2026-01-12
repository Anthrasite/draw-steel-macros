//@id=ukYj6iAOXWcNh8Sl
//@name=Sermon of Grace
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Sermon of Grace`,
  resourceCost: 5,
  flavorText: `You inspire your allies with tales of your saint’s great deeds.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `4 burst`,
  target: `Each ally in the area`,
  effect: `Each target can spend a Recovery. Additionally, each target can use a free triggered action to end one effect on them that is ended by a saving throw or that ends at the end of their turn, or to stand up if prone.`,
});

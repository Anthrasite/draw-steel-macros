//@id=eTSFMAYOB4ImxVN7
//@name=Blessed Light
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Blessed Light`,
  flavorText: `Burning radiance falls upon your foe, transferring some of their energy to a nearby ally.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Intuition`,
  tier1Effect: `3 + I holy damage`,
  tier2Effect: `5 + I holy damage`,
  tier3Effect: `8 + I holy damage`,
  effect: `One ally within distance gains a number of surges equal to the tier outcome of your power roll.`,
});

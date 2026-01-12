//@id=NdubYlBFGLXswZ3r
//@name=Ray of Wrath
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Ray of Wrath`,
  flavorText: `You unleash a blast of holy light upon your foe.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Intuition`,
  tier1Effect: `2 + I damage`,
  tier2Effect: `4 + I damage`,
  tier3Effect: `6 + I damage`,
  effect: `You can have this ability deal holy damage.`,
});

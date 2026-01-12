//@id=aN4nyAKvP1bFGdVW
//@name=Sticky Bomb
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Sticky Bomb`,
  flavorText: `Explosives are best when they’re attached to an enemy.`,
  resourceCost: 5,
  keywords: `Ranged`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Agility`,
  tier1Effect: `4 + A fire damage`,
  tier2Effect: `7 + A fire damage`,
  tier3Effect: `11 + A fire damage`,
  effect: `You attach a small bomb to a creature. If you are hidden from the creature, they don’t notice the bomb and you remain hidden. The creature otherwise notices the bomb and can disarm and remove it as a main action. If they don’t, at the end of your next turn, the bomb detonates. When the bomb detonates, you make a power roll targeting each enemy within 2 squares of it.`,
});

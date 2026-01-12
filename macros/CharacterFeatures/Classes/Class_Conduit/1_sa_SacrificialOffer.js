//@id=s3ozSYjNGIkV0xqt
//@name=Sacrificial Offer
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Sacrificial Offer`,
  flavorText: `Divine magic tears at your foe and defends a nearby friend.`,
  keywords: `Magic, Ranged, Strike`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One creature`,
  powerRollStat: `Intuition`,
  tier1Effect: `2 + I corruption damage`,
  tier2Effect: `4 + I corruption damage`,
  tier3Effect: `6 + I corruption damage`,
  effect: `Choose yourself or one ally within distance. That character can impose a bane on one power roll made against them before the end of their next turn.`,
});

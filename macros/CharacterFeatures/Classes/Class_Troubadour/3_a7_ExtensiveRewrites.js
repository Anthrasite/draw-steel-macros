//@id=lpFVT2rzHd31fJgx
//@name=Extensive Rewrites
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Extensive Rewrites`,
  resourceCost: 7,
  flavorText: `No, this isn’t right. That foe was over there!`,
  keywords: `Area, Magic`,
  type: `Maneuver`,
  distance: `4 burst`,
  target: `Each enemy in the area`,
  powerRollStat: `Presence`,
  tier1Effect: `Slide 3; P < WEAK, this slide ignores the target’s stability`,
  tier2Effect: `Slide 5; P < AVERAGE, this slide ignores the target’s stability`,
  tier3Effect: `Slide 7; P < STRONG, this slide ignores the target’s stability`,
  effect: `Instead of sliding a target, you can swap their location with another target as long as each can fit into the other’s space. You can’t slide targets into other creatures or objects using this ability.`,
});

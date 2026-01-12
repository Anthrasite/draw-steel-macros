//@id=9gEaDtANzhC6TR5Y
//@name=Cuirass of the Gods
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Cuirass of the Gods`,
  resourceCost: 9,
  flavorText: `Your allies are covered in spiritual armor.`,
  keywords: `Area, Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Three creatures`,
  effect: `You can target yourself instead of one creature with this ability. Each target has damage immunity 5 until the start of your next turn.`,
});

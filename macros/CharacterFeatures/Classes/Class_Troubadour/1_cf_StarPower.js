//@id=WmZoTd3QH09vwFRb
//@name=Star Power
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Star Power`,
  resourceCost: 1,
  flavorText: `Your years of practicing fencing and dancing pay off on the battlefield.`,
  keywords: `—`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `You gain a +2 bonus to speed until the end of your turn. Additionally, the next power roll you make this turn can’t have an outcome lower than tier 2.`,
  extraResourceCost: `1`,
  extraResourceEffect: `You gain a +4 bonus to speed instead.`,
});

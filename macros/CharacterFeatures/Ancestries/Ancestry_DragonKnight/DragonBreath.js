//@id=5gMrGx9WZJaNS76B
//@name=Dragon Breath
//@img=modules/draw-steel-macros/icons/ancestry/dragon-knight.png
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Dragon Breath",
  flavorText: "A furious exhalation of energy washes over your foes.",
  keywords: "Area, Magic",
  type: "Main action",
  distance: "3 cube within 1",
  target: "Each enemy in the area",
  powerRollStat: "Might or Presence",
  tier1Effect: "2 damage",
  tier2Effect: "4 damage",
  tier3Effect: "6 damage",
  effect: "You choose the ability’s damage type from acid, cold, corruption, fire, lightning, or poison."
});

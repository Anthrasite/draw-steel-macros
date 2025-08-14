//@id=4FnAYsvJSGdOaM70
//@name=Squad! Forward!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Squad! Forward!",
  flavorText: "On your command, you and your allies force back the enemy line.",
  resourceCost: 3,
  keywords: "Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Self and two allies",
  effect: "Each target can move up to their speed."
});

//@id=i6IKY21gOXHqVxl3
//@name=Classic Chandelier Stunt
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Classic Chandelier Stunt`,
  resourceCost: 5,
  flavorText: `Audiences love this bit.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `Self and one willing ally`,
  effect: `Each target can shift up to 5 squares, including vertically, but must end this movement adjacent to the other target and on solid ground. Each target can then make a melee free strike that deals extra damage equal to twice their highest characteristic score.`,
});

//@id=R5wh7QZoBiLXFA1v
//@name=Flip the Script
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Flip the Script`,
  resourceCost: 5,
  flavorText: `You try a different take on events, justifying the new locations everyone ended up in.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `3 burst`,
  target: `Self and each ally in the area`,
  effect: `Each target can teleport up to 5 squares. Any teleported target who was slowed is no longer slowed.`,
});

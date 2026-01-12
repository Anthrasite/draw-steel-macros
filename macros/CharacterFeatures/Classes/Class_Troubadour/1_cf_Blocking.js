//@id=xRmwcvnXGl7aLd4T
//@name=Blocking
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Blocking`,
  flavorText: `No, no, no, you lose the audience that way. Try it like this …`,
  keywords: `Area, Magic, Performance`,
  type: `No action`,
  distance: `2 aura`,
  target: `Each creature in the area`,
  effect: `At the end of each of your turns while this performance is active, you can choose up to a number of targets equal to your Presence score and teleport those targets to unoccupied spaces in the area. A target can’t be teleported in a way that would harm them (such as over a cliff), leave them dying, or result in them suffering a condition or other negative effect.`,
});

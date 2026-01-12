//@id=Tag9CBns4uF2x8Vz
//@name=Choreography
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Choreography`,
  flavorText: `Taps, kicks, steps. It’s all “choreography.”`,
  keywords: `Area, Magic, Performance`,
  type: `No action`,
  distance: `5 aura`,
  target: `Self and each ally in the area`,
  effect: `While this performance is active, each target who starts their turn in the area gains a +2 bonus to speed until the end of their turn.`,
});

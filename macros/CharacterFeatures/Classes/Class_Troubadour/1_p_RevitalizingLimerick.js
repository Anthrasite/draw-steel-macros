//@id=CyNAGkEcKQ9gPHUd
//@name=Revitalizing Limerick
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Revitalizing Limerick",
  flavorText: "There once was a man from Capital …",
  keywords: "Area, Magic, Performance",
  type: "No action",
  distance: "5 aura",
  target: "Self and each ally in the area",
  effect: "At the end of each of your turns while this performance is active, you can choose up to a number of targets equal to your Presence score. Each chosen target can spend a Recovery."
});

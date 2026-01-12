//@id=kxfOVN02pi8G4uAJ
//@name=Acrobatics
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Acrobatics",
  flavorText: "Folks love a good tumble.",
  keywords: "Area, Magic, Performance",
  type: "No action",
  distance: "5 aura",
  target: "Self and each ally in the area",
  effect: "While this performance is active, each target who starts their turn in the area can automatically obtain a tier 3 outcome on one test made to jump, tumble, or climb as part of their movement before the end of their turn."
});

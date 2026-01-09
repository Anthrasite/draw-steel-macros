//@id=SFda49iE5xrVfIGm
//@name=Corrupt Spirit
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Corrupt Spirit",
  flavorText: "You unlock the sinister secrets of pain.",
  keywords: "Magic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: "Until the end of your turn, whenever you use a damage-dealing heroic ability against a single target, you can weaken that target’s life force. The ability deals extra corruption damage equal to your highest characteristic score."
});

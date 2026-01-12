//@id=CwSDJR7OuTtFI6zx
//@name=Riposte
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Riposte",
  flavorText: "“I’d have brought treats had I known I’d be fighting a dog.”",
  keywords: "Melee",
  type: "Triggered",
  distance: "Melee 1",
  target: "Self or one ally",
  trigger: "The target takes damage from a melee strike.",
  effect: "The target makes a free strike against the creature who made the triggering strike.",
});

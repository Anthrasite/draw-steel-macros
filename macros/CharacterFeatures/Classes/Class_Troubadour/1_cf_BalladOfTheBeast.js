//@id=V065CRvrImQJOhBt
//@name=“Ballad of the Beast”
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "“Ballad of the Beast”",
  flavorText: "Teeth are bare! ♪ Eyes black! ♪ No escaping the beast! ♪",
  keywords: "Area, Magic, Performance",
  type: "No action",
  distance: "5 aura",
  target: "Self and each ally in the area",
  effect: "While this performance is active, each target who starts their turn in the area gains 1 surge."
});

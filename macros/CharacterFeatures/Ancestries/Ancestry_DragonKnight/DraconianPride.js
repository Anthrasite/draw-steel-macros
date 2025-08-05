//@id=40h9P6TgdWpn2JIE
//@name=Draconian Pride
//@img=modules/draw-steel-macros/icons/ancestry/dragon-knight.png
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Draconian Pride",
  flavorText: "You let loose a mighty roar to shake your foes’ spirits.",
  keywords: "Area, Magic",
  type: "Main action",
  distance: "1 burst",
  target: "Each enemy in the area",
  powerRollStat: "Might or Presence",
  tier1Effect: "2 damage",
  tier2Effect: "5 damage; push 1",
  tier3Effect: "7 damage; push 2"
});

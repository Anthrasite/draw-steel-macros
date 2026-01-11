//@id=i9ecbaNLxluX4TP7
//@name=Wall of Ice
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Wall of Ice",
  flavorText: "You create a wall of ice.",
  resourceCost: 9,
  keywords: "Area, Psionic, Ranged",
  type: "Main action",
  distance: "10 wall within 10",
  target: "Special",
  effect: "You can place this wall in occupied squares, sliding each creature in the area into the nearest unoccupied space of your choice. The wall remains until the end of the encounter or until you are dying. The wall’s squares are treated as stone squares for the purpose of damage, and you and allies can move freely through the wall. Each enemy who enters a square adjacent to the wall and has M < AVERAGE is slowed (save ends). Each enemy who is force moved into the wall and has M < AVERAGE is restrained (save ends)."
});

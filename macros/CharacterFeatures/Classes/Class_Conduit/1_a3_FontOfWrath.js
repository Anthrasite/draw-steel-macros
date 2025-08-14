//@id=8vTo4VJ7fiR2Or0U
//@name=Font of Wrath
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Font of Wrath",
  resourceCost: 3,
  flavorText: "A brilliant column of holy light appears on the battlefield, striking out at nearby enemies.",
  keywords: "Magic, Ranged",
  type: "Main action",
  distance: "Ranged 10",
  target: "Special",
  effect: "You summon a spirit of size 2 who can’t be harmed, and who appears in an unoccupied space within distance. The spirit lasts until the end of your next turn. You and your allies can move through the spirit’s space, but enemies can’t. Any enemy who moves within 2 squares of the spirit for the first time in a combat round or starts their turn there takes holy damage equal to your Intuition score."
});

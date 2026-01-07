//@id=fWlO1yQsjgND3rue
//@name=Come Out to Play
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Come Out to Play",
  flavorText: "Come out to play-yay!",
  resourceCost: 1,
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "5 burst",
  target: "Each enemy in the area hidden to you",
  effect: `Each target who has P < AVERAGE is taunted by you until the end of their next turn, and you know the location of each creature taunted in this way.`
});

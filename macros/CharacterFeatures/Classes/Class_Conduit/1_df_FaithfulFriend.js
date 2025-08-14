//@id=uAr7dJH8wVWvqt9L
//@name=Faithful Friend
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Faithful Friend",
  flavorText: "An animal spirit is drawn to you, sharing their senses with you and serving you faithfully.",
  keywords: "Magic",
  type: "Main action",
  distance: "Self",
  target: "Self",
  effect: "You conjure a spirit that takes the form of any animal you have seen. The incorporeal animal has speed 5 and can fly, but can’t physically interact with the world. While you are within 10 squares of the spirit, you automatically sense everything that type of animal would sense, in addition to sensing your own surroundings. You can dismiss the spirit at any time (no action required). If the spirit takes any damage, they are dismissed and you take 1d10 psychic damage that can’t be reduced in any way."
});

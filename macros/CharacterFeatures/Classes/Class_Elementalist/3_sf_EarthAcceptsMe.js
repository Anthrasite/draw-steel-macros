//@id=B3Xf1dLM52prx7yt
//@name=Earth Accepts Me
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Earth Accepts Me",
  flavorText: "You can slip into the stone.",
  type: "Main action",
  keywords: "Earth, Magic",
  distance: "Self",
  target: "Self",
  effect: "You step into a mundane dirt, metal, or stone object (including a wall) that is as large as you or larger. You can remain inside the object for as long as you like. While inside the object, you can observe events and speak to creatures outside it, but you don’t have line of effect to anything outside the object and vice versa. You can travel through the object freely until you exit it. If the object you meld with is destroyed, you take 10 damage and exit the object."
});

//@id=QhmKHSVOx36LwYWT
//@name=Invocation of Mystery
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Invocation of Mystery`,
  resourceCost: 9,
  flavorText: `“Now you see us …”`,
  keywords: `Area, Magic`,
  type: `Maneuver`,
  distance: `4 burst`,
  target: `Self and each ally in the area`,
  effect: `Each target is invisible until the start of your next turn.`,
});

//@id=qToWpxsVhQR7B3Iv
//@name=Minor Acceleration
//@img=icons/magic/symbols/star-rising-purple.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Minor Acceleration",
  flavorText: "You fill yourself or an ally with a burst of speed.",
  keywords: "Psionic, Melee",
  type: "Maneuver",
  distance: "Melee 1",
  target: "Self or one ally",
  effect: "The target gains a bonus to speed equal to your Reason, Intuition, or Presence score (your choice) until the start of your next turn."
});

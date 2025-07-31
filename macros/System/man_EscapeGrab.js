//@id=wr2LM4UzFOuqGjN1
//@name=Escape Grab
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Escape Grab",
  keywords: "—",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  description: `A creature who is grabbed by another creature, an object, or an effect can attempt to escape by using the following ability:`,
  powerRollStat: "Might or Agility",
  tier1Effect: "No effect.",
  tier2Effect: "You can escape the grab, but if you do, a creature who has you grabbed can make a melee free strike against you before you are no longer grabbed.",
  tier3Effect: "You are no longer grabbed.",
  effect: "You take a bane on this maneuver if your size is smaller than the size of the creature, object, or effect that has you grabbed."
});

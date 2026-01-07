//@id=a0jWUQIdy1btcfiv
//@name=Concussive Slam
//@img=icons/magic/symbols/star-rising-purple.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Concussive Slam",
  flavorText: "You slam an invisible force down upon the target.",
  keywords: "Psionic, Ranged, Strike",
  type: "Main action",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Reason, Intuition, or Presence",
  tier1Effect: "2 + R, I, or P damage",
  tier2Effect: "5 + R, I, or P damage; push 1",
  tier3Effect: "7 + R, I, or P damage; push 2; M < STRONG, prone"
});

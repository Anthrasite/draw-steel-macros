//@id=bKoeZzQXHAB7RMIr
//@name=Relentless Nemesis
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Relentless Nemesis",
  flavorText: "You strike, and for the next few moments, your enemy can’t escape you.",
  resourceCost: 3,
  keywords: "Melee, Psionic, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Agility",
  tier1Effect: "6 + A damage",
  tier2Effect: "8 + A damage",
  tier3Effect: "12 + A damage",
  effect: "Until the start of your next turn, whenever the target finishes moving or being force moved, you can use a free triggered action to shift up to your speed. You must end this shift adjacent to the target."
});

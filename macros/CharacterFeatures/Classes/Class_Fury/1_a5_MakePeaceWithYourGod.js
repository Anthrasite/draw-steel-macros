//@id=78tu3z4G5NCHBp6K
//@name=Make Peace With Your God!
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Make Peace With Your God!",
  resourceCost: 5,
  flavorText: "Anger is your energy.",
  keywords: "—",
  type: "Free maneuver",
  distance: "Self",
  target: "Self",
  effect: "You gain 1 surge, and the next ability roll you make this turn automatically obtains a tier 3 outcome.",
  beforeRollFunc: async function(rollResult) {
    await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 1, isDelta: true });
  }
});

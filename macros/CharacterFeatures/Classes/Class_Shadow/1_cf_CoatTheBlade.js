//@id=2qFgztbm3xLayTlU
//@name=Coat the Blade
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Coat the Blade",
  flavorText: "A little poison goes a long way.",
  keywords: "—",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: `You gain 2 surges. Additionally, whenever you use a surge before the end of the encounter, you can choose to have it deal poison damage.`,
  extraResourceCost: "1+",
  extraResourceEffect: "For each insight you spend, you gain 1 additional surge.",
  beforeRollFunc: async function() {
    await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 2, isDelta: true });
  },
  extraResourceFunc: async function(extraResourceUsed, rollResult) {
    await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: extraResourceUsed, isDelta: true });
  }
});

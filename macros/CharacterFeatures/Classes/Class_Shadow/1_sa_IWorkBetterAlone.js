//@id=0gVIHWSjOdtepar9
//@name=I Work Better Alone
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "I Work Better Alone",
  flavorText: "\"It’s better, just you and me. Isn’t it?\"",
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "3 + A damage",
  tier2Effect: "6 + A damage",
  tier3Effect: "9 + A damage",
  effect: "If the target has none of your allies adjacent to them, you gain 1 surge before making the power roll.",
  beforeRollFunc: async function() {
    const allyAdjacent = await Dialog.confirm({
      title: `Target alone?`,
      content: `<p>Are any of your allies adjacent to the target?</p>`
    });

    if (!allyAdjacent)
      await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 1, isDelta: true });
  }
});

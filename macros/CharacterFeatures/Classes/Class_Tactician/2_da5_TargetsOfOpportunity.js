//@id=kDUhZT4J3QrICiaS
//@name=Targets of Opportunity
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Targets of Opportunity",
  flavorText: "You point out easy targets to your friends, allowing them to include more enemies in their attacks.",
  resourceCost: 5,
  keywords: "Ranged",
  type: "Maneuver",
  distance: "Ranged 5",
  target: "Two creatures",
  effect: `Each target is marked by you, and you gain two surges.</p>
    <p><strong>Mark Benefit:</strong> Until the end of the encounter, whenever you or any ally makes a strike against a creature marked by you, you can spend 2 focus to add one additional target to the strike.</p>`,
  beforeRollFunc: async function() {
    await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 2, isDelta: true });
  }
});

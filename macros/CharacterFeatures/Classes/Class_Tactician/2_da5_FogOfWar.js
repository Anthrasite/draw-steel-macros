//@id=3pelNEnDMgqF7dkr
//@name=Fog of War
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Fog of War`,
  flavorText: `Your unorthodox strategy causes enemies to lash out in fear, heedless of who they might be attacking.`,
  resourceCost: 5,
  keywords: `Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `Two creatures`,
  effect: `<p>Each target is marked by you, and must immediately make a free strike against a creature of your choice within 5 squares of them.</p>
    <p><strong>Mark Benefit:</strong> Until the end of the encounter, whenever you or any ally makes a strike against a creature marked by you, you can spend 2 focus to force that target to make a free strike against a creature of your choice within 5 squares of them.</p>`
});

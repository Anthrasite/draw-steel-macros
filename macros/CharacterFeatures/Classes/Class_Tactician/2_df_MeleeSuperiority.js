//@id=GBdJEtj57OavY8Vr
//@name=Melee Superiority
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Melee Superiority",
  description: `After constant drills, you can more accurately anticipate an enemy’s plan and thwart their attempts to move across the battlefield. Whenever you make an opportunity attack, the target’s speed is reduced to 0 until the end of the current turn.`,
  source: "Class"
});

//@id=O73FKbSqhVL4ACpv
//@name=Density Augmentation
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Density Augmentation",
  description: `You gain a +6 bonus to Stamina, and this bonus increases by 6 at 4th, 7th, and 10th levels. Additionally, you gain a +1 bonus to stability.`,
  source: "Class"
});

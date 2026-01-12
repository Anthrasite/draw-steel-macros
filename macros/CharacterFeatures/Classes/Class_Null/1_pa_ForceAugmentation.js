//@id=DNibvPqMTHxYtyAG
//@name=Force Augmentation
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Force Augmentation`,
  description: `Your damage-dealing psionic abilities gain a +1 bonus to rolled damage.`,
  source: `Class`,
});

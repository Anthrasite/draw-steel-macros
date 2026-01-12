//@id=1WvakwFuYrIlZLym
//@name=Speed Augmentation
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Speed Augmentation`,
  description: `You gain a +1 bonus to speed and to the distance you can shift when you take the Disengage move action.`,
  source: `Class`,
});

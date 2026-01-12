//@id=jfVL5GQ2hiqkle3J
//@name=Too Slow
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Too Slow`,
  flavorText: `Your foe made a big mistake.`,
  resourceCost: 5,
  keywords: `—`,
  type: `Free triggered`,
  distance: `Self; see below`,
  target: `Self`,
  trigger: `You use your In All This Confusion ability.`,
  effect: `You ignore any effects associated with the damage that triggered your In All This Confusion ability. Before you teleport, you can make a free strike against a creature who damaged you to trigger In All This Confusion. After you teleport, you can spend a Recovery.`,
});

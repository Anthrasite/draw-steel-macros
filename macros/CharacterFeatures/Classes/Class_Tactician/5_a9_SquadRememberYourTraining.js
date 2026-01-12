//@id=5XuPUF0Rs2zi9chx
//@name=Squad! Remember Your Training!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Squad! Remember Your Training!`,
  flavorText: `You remind your allies how to best use their gear.`,
  resourceCost: 9,
  keywords: `Ranged`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `Self and two allies`,
  effect: `Each target gains 1 surge and can use a signature ability that has a double edge.`,
  beforeRollFunc: async function() {
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 1, isDelta: true });
  },
});

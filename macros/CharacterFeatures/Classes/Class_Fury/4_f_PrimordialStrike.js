//@id=jHJiU8MNkxfmqnC0
//@name=Primordial Strike
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Primordial Strike`,
  description: `You can manifest your ferocity directly as an elemental force created by the Primordial Chaos. As part of any strike, you can spend 1 ferocity to gain 1 surge that must be used for that strike. The extra damage dealt by the surge can be acid, cold, corruption, fire, lightning, poison, or sonic (your choice).`,
  source: `Class`,
  onUseFunc: async function() {
    const currResource = await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `resource` });
    if (currResource.value < 1) {
      ui.notifications.info(`Not enough ${currResource.label}!`);
      return
    }

    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `resource`, value: -1, isDelta: true });
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 1, isDelta: true });
  }
});

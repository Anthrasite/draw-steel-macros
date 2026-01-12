//@id=woMSXRBu1QUb0NJm
//@name=Oracular Warning
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Oracular Warning`,
  description: `Each time you finish a respite, you can share the vague dreams of the future granted to you by the gods with allies who finished the respite with you. These premonitions help you and your allies stay alive, granting each of you temporary Stamina equal to 10 + your level that lasts until you finish a respite.`,
  source: `Class`,
  onUseFunc: async function() {
    const level = (await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `level` })).value;
    await game.macros.getName(`UpdateTempStamina`).execute({ activeActor: actor, value: 10 + level });
  },
});

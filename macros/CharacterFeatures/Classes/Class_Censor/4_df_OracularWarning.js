//@id=AsY5QzKedSPWj2vq
//@name=Oracular Warning
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Oracular Warning",
  description: `Each time you finish a respite, you can share the vague dreams of the future granted to you by the gods with allies who finished the respite with you. These premonitions help you and your allies stay alive, granting each of you temporary Stamina equal to 10 + your level that lasts until you finish another respite.`,
  source: "Class"
});

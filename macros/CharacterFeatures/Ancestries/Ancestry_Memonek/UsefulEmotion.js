//@id=29fYzTZtGeQSU3ra
//@name=Useful Emotion
//@img=icons/skills/social/trading-justice-scale-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Useful Emotion`,
  description: `Velloparatha—the worldsickness—might hinder you, but you know how to turn your pain into something your enemies feel. At the start of any combat, you gain 1 surge.`,
  source: `Ancestry`,
  onUseFunc: async function() {
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 1, isDelta: true });
  },
});

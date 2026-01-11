//@id=72tL4JnvbNwflI61
//@name=Prisoner of the Synlirii
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Prisoner of the Synlirii",
  description: `<p>You were captured by the psionic beings known as voiceless talkers. You escaped them, but you can’t escape a feeling that’s lingered since then in the back of your mind—the feeling of being watched.</p>
    <p><b>Benefit:</b> You can telepathically communicate with any creature within 10 squares of you if they share a language with you and you know of each other. A creature you communicate with this way can respond telepathically if they choose.</p>
    <p><b>Drawback:</b> Any voiceless talker within 1 mile knows your location, and can overhear and understand your telepathic conversations.</p>`,
  source: "Complication"
});


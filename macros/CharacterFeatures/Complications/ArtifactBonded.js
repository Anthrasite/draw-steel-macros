//@id=o6mtMr8nkzEITPps
//@name=Artifact Bonded
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Artifact Bonded`,
  description: `<p>A powerful artifact has bonded to you, though you don’t know whether you’re destined to wield the artifact or to destroy it. You’re not powerful enough to use it at the moment, although you might be someday. For now, though, the artifact has no effect beyond getting you in trouble.</p>
    <p><b>Benefit:</b> Choose an artifact. The first time in an encounter that you are reduced to 0 Stamina against your will, the artifact appears on your person. It disappears at the end of your next turn, when you benefit from one of its properties, or when you have more than 0 Stamina, whichever comes first.</p>
    <p><b>Drawback:</b> Each time the artifact appears, you lose a Recovery. If you have no Recoveries remaining, you take 1d10 damage instead, which can’t be reduced in any way.</p>`,
  source: `Complication`,
});

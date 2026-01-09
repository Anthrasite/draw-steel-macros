//@id=utIXa9ZsCcJ0Fx4A
//@name=Curse of Misfortune
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Curse of Misfortune",
  description: `You should have never pissed off that mage! Maybe they deserved your ire, or maybe you were just being a bully. But whatever the case, they cursed you before skipping town. Now, in moments of pressure that require great skill, you have a tendency to choke, falling and flailing in such a dramatic fashion that you take everyone else with you.</p>
    <p><b>Benefit and Drawback:</b> Whenever you make a test in combat and incur a consequence, you ignore that consequence. Instead, you and each ally adjacent to you fall prone.</p>`,
  source: "Complication"
});

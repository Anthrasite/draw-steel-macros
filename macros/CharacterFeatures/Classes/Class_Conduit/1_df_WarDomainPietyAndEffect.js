//@id=DIZMBTnm3ek5PS1c
//@name=War Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "War Domain Piety and Effect",
  description: `<p><strong>Piety:</strong> You gain 2 piety the first time in an encounter that you or a creature within 10 squares takes damage greater than 10 + your level in a single turn.</p>
    <p><strong>Prayer Effect:</strong> Choose up to three allies within 10 squares of you, or choose yourself instead of one ally. Each target gains 2 surges.</p>`,
  source: "Class"
});

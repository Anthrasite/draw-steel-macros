//@id=6WlT1nuyHK4c2LfG
//@name=Knowledge Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Knowledge Domain Piety and Effect",
  description: `<p><strong>Piety:</strong> You gain 2 piety the first time in an encounter that the Director spends Malice.</p>
    <p><strong>Prayer Effect:</strong> Choose up to five allies within 10 squares of you, or choose yourself instead of one ally. Each target gains 1 surge.</p>`,
  source: "Class"
});

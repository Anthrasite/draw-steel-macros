//@id=QPWKSlLTjG4Xw57v
//@name=Fate Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Fate Domain Piety and Effect",
  description: `<strong>Piety:</strong> You gain 2 piety the first time in an encounter that an ally within 10 squares obtains a tier 3 outcome on a power roll, or an enemy within 10 squares obtains a tier 1 outcome on a power roll.</p>
    <p><strong>Prayer Effect:</strong> You call on the forces of fate to create a reliable future. Choose a creature within 10 squares. That creature automatically obtains a tier 1 or tier 3 outcome (your choice) on their next power roll made before the end of the encounter.</p>`,
  source: "Class"
});

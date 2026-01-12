//@id=ECBI2MzXPyOUA7K3
//@name=Love Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Love Domain Piety and Effect`,
  description: `<p><strong>Piety:</strong> You gain 2 piety the first time in an encounter that you or any ally within 10 squares uses the Aid Attack maneuver or an ability that targets an ally.</p>
    <p><strong>Prayer Effect:</strong> Each ally within 10 squares of you gains temporary Stamina equal to two times your Intuition score.</p>`,
  source: `Class`,
});

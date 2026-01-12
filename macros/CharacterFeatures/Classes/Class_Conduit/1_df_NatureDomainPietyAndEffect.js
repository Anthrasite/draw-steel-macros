//@id=yJGev9lLonZV3A7z
//@name=Nature Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Nature Domain Piety and Effect`,
  description: `<p><strong>Piety:</strong> You gain 2 piety the first time in an encounter that you or a creature within 10 squares takes acid, cold, fire, lightning, poison, or sonic damage.</p>
    <p><strong>Prayer Effect:</strong> Vines whip up from the floor or ground within 10 squares, wrapping around a number of creatures equal to your Intuition score. You can slide each creature up to a number of squares equal to your Intuition score. The vines then fade away.</p>`,
  source: `Class`,
});

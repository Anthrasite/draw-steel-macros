//@id=tBNUx0aqfYP2D7Hd
//@name=Trickery Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Trickery Domain Piety and Effect",
  description: `<strong>Piety:</strong> You gain 2 piety the first time in an encounter that you or a creature within 10 squares takes the Aid Attack or Hide maneuver.</p>
    <p><strong>Prayer Effect:</strong> You slide one creature within 10 squares of you up to a number of squares equal to 5 + your conduit level.</p>`,
  source: "Class"
});

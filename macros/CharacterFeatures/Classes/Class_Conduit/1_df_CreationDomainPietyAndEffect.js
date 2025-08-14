//@id=vQ08fi9ucxO4Hhsl
//@name=Creation Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Creation Domain Piety and Effect",
  description: `<strong>Piety:</strong> You gain 2 piety the first time in an encounter that a creature within 10 squares uses an area ability.</p>
    <p><strong>Prayer Effect:</strong> You summon the forces of creation and create a wall of stone within 10 squares whose size is 5 + your Intuition score. The wall lasts until the end of the encounter.</p>`,
  source: "Class"
});

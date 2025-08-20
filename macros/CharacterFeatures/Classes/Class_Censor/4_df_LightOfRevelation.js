//@id=V5FDCeK9B3QdacPn
//@name=Light of Revelation
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Light of Revelation",
  description: `As a maneuver, you make your body shine brightly, illuminating your space and each square within 5 squares until you dismiss the light (no action required). This light shines through any darkness. Hidden creatures in the area are automatically revealed, and creatures in the light, including you, can’t hide. While this feature is active, you gain an edge on tests made to notice hidden objects and entrances and to detect supernatural illusions.`,
  source: "Class"
});

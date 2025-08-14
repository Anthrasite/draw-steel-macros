//@id=qt3m2NrO8hljK5GR
//@name=Blessing of Compassion
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Blessing of Compassion",
  description: `You exude a magic presence that can soothe those willing to socially engage with you. You gain an edge on any test made to assist another creature with a test.</p>
    <p>Additionally, when you are present at the start of a negotiation, one NPC of your choice has their patience increased by 1 (to a maximum of 5), and the first test made to influence them gains an edge.</p>`,
  source: "Class"
});

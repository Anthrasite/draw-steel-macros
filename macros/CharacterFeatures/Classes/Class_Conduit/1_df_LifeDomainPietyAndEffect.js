//@id=LwCSxf7dNjKAbknG
//@name=Life Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Life Domain Piety and Effect`,
  description: `<p><strong>Piety:</strong> You gain 2 piety the first time in an encounter that a creature within 10 squares regains Stamina.</p>
    <p><strong>Prayer Effect:</strong> Choose yourself or one ally within 10 squares. That character can spend a Recovery, can end one effect on them that is ended by a saving throw or that ends at the end of their turn, or can stand up if they are prone. Alternatively, you or one ally within 10 squares gains temporary Stamina equal to two times your Intuition score.</p>`,
  source: `Class`,
});

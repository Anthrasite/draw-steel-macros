//@id=qbDN0pa8HBUTlOzg
//@name=Protection Domain Piety and Effect
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Protection Domain Piety and Effect`,
  description: `<p><strong>Piety:</strong> You gain 2 piety the first time in an encounter that you or any ally within 10 squares gains temporary Stamina, or uses a triggered action to reduce incoming damage or to impose a bane or double bane on an enemy’s power roll.</p>
    <p><strong>Prayer Effect:</strong> One ally within 10 squares gains temporary Stamina equal to four times your Intuition score.</p>`,
  source: `Class`,
});

//@id=7wnLva5rJVWS8Qc4
//@name=Psionic Leap
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Psionic Leap`,
  description: `You can long jump and high jump a distance equal to twice your Agility score without needing to make a test.`,
  source: `Class`,
});

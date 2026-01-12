//@id=FZ0pNc4MIB7YXwbD
//@name=Troupe Leading Player - Spotlight
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Troupe Leading Player - Spotlight`,
  description: `You magically cause a creature within 10 squares to shed light for 5 squares. This light lasts for 1 minute, until the creature is more than 10 squares away from you, or until you dismiss the effect (no action required). While illuminated, a creature can’t sneak or hide, they take a bane on tests made to perform any action secretly, and they gain an edge on tests made using the Lead, Music, or Perform skills.`,
  source: `Title`,
});

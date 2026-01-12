//@id=D5uawIKCSn781LqE
//@name=Heist Hero - Sneakers
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Heist Hero - Sneakers`,
  description: `You gain the Sneak skill. If you already have this skill, you instead gain an edge on tests made using the Sneak skill. During group tests, you can both use the Sneak skill and assist another hero using the Sneak skill.`,
  source: `Title`,
});

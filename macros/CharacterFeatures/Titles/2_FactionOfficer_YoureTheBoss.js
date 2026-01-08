//@id=8aL9sB7EKYxg5Njb
//@name=Faction Officer - You’re the Boss
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Faction Officer - You’re the Boss",
  description: `You are given a position of great authority in your faction. Additionally, lower-ranking members of your faction follow your routine orders. In nonroutine matters, you gain an edge on tests made to influence those characters’ behavior.`,
  source: "Title"
});

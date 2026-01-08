//@id=pGQJsmT2hlFw8fXd
//@name=Back From the Grave
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Back From the Grave",
  description: `You are restored to life. You gain the Tough But Withered signature trait from the revenant ancestry.`,
  source: "Title"
});

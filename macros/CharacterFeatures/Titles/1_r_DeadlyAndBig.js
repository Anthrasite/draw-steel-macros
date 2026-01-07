//@id=WcD73PsjriLQAYpJ
//@name=Deadly and Big
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Deadly and Big",
  description: `Your strikes gain a +3 damage bonus against creatures whose size is smaller than yours.`,
  source: "Title"
});

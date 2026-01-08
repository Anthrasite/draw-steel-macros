//@id=615dBRaVrJpZxcAQ
//@name=Arena Fighter - Dirty Fighting
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Arena Fighter - Dirty Fighting",
  description: `While you are standing, your melee strikes gain a +3 damage bonus against prone creatures. Additionally, being prone doesn’t impose a bane on your strikes.`,
  source: "Title"
});

//@id=ZsaIm294HvkJB0ip
//@name=Planar Voyager - Stellar Knowledge
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Planar Voyager - Stellar Knowledge",
  description: `You gain the Mechanics skill. If you already have this skill, you instead gain an edge on tests made using the skill. Additionally, you gain the item prerequisite and project source for a psionic trinket.`,
  source: "Title"
});

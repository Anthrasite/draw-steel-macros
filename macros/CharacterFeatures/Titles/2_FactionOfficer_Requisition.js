//@id=3B9slCUfSEMcAneX
//@name=Faction Officer - Requisition
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Faction Officer - Requisition",
  description: `You are given a position of great authority in your faction. Additionally, when you gain this title, you gain a 1st- or 2nd-echelon magic trinket of your choice from your faction. Whenever you gain a level, you can swap the trinket out for another one.`,
  source: "Title"
});

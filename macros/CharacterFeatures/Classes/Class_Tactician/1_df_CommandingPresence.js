//@id=E4dg8ClrT6iOPAIa
//@name=Commanding Presence
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Commanding Presence`,
  description: `You command any room you walk into. While you are present during a negotiation, each hero with you treats their Renown as 2 higher than usual. Additionally, each hero with you during a combat encounter has a double edge on tests made to stop combat and start a negotiation.`,
  source: `Class`,
});

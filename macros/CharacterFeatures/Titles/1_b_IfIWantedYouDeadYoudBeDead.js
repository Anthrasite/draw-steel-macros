//@id=8cMxkDBCg6QldwnU
//@name=If I Wanted You Dead, You’d Be Dead
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "If I Wanted You Dead, You’d Be Dead",
  description: `Whenever you defeat foes without killing any of them (including the foes you defeat to meet the prerequisite for this title), you gain an edge on tests during negotiations with those foes.`,
  source: "Title"
});

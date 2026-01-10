//@id=RMA5uOywZGdCb7eX
//@name=Leave No Trace
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Leave No Trace",
  description: `You and any ally within 10 squares of you can move at full speed while sneaking. Additionally, enemies within 10 squares of you take a bane on tests made to search for you or your allies while any of you are hidden.`,
  source: "Class"
});

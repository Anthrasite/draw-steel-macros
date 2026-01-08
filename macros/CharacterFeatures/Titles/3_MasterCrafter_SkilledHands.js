//@id=3HVdXgEhQ8mS9yfb
//@name=Master Crafter - Skilled Hands
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Master Crafter - Skilled Hands",
  description: `You have a skill from the crafting skill group that would have been used during the creation of the prerequisite item. If you already have that skill, you instead gain an edge on tests made using the skill. Additionally, you gain a second skill of your choice from the crafting skill group.`,
  source: "Title"
});

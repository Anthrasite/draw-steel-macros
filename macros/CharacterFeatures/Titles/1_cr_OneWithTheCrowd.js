//@id=px5MvwfDLJrWmj6Y
//@name=One with the Crowd
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "One with the Crowd",
  description: `While you’re using one or more creatures as cover, you gain an edge on tests made to hide and sneak.`,
  source: "Title"
});

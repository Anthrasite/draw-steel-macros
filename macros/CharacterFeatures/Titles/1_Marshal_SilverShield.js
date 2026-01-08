//@id=xVRzB8CXOcf79TwY
//@name=Marshal - Silver Shield
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Marshal - Silver Shield",
  description: `You have a badge granted to you by your organization. While you wear it, you gain the My Life for Yours feature from the censor class. When you use that ability, you can’t spend wrath unless you have the Wrath class feature.`,
  source: "Title"
});

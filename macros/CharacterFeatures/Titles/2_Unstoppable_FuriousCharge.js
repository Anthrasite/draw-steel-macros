//@id=54hKY3JNIsgfAkCX
//@name=Unstoppable - Furious Charge
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Unstoppable - Furious Charge",
  description: `When you use the Charge action, your strike made as part of that action gains a damage bonus equal to the number of squares you moved as part of the charge.`,
  source: "Title"
});

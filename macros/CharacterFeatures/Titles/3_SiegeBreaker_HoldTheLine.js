//@id=zao8bJmFiqAwdZY2
//@name=Siege Breaker - Hold the Line
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Siege Breaker - Hold the Line",
  description: `While you’re within 5 squares of an ally, you and each ally within 5 squares of you gains a +3 bonus to stability.`,
  source: "Title"
});

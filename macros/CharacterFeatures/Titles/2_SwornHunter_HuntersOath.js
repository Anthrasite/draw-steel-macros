//@id=nsO21fGigEkh3RCv
//@name=Sworn Hunter - Hunter’s Oath
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Sworn Hunter - Hunter’s Oath",
  description: `As a main action, you swear a hunter’s oath against a creature within 10 squares who you have line of effect to. This oath lasts until the target dies or until you swear a hunter’s oath against a different creature. As long as the hunter’s oath lasts, you magically know the direction to the target if they are within 50 miles of you, and your damage-dealing abilities gain a +5 damage bonus against the target.`,
  source: "Title"
});

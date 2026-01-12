//@id=GswWNhYPyOuQSMmZ
//@name=Sanctuary Ward
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Sanctuary Ward`,
  description: `In response to a foe’s aggression, your god protects you. Whenever another creature damages you, that creature can’t target you with a strike until you harm them or one of their allies, or until the end of their next turn.`,
  source: `Class`,
});

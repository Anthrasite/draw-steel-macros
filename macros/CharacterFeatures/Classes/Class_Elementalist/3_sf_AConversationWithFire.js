//@id=NkR2WCBfTps7q3cn
//@name=A Conversation With Fire
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "A Conversation With Fire",
  description: `When you spend 1 uninterrupted minute in front of a fire, you can speak the name of another creature. If that creature is willing to speak to you, their image appears in the fire, and they can see you before them in a shimmering ball of light. The two of you can speak to each other through these images as if you were together in person. As a maneuver, you or the creature can end the conversation.`,
  source: "Class"
});

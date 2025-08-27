//@id=jf8xMuLJ3TbrgIzD
//@name=Seance
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Seance",
  description: `You can commune with a network of spirits. As a respite activity, you speak the name of a creature who died and isn’t undead. If the creature’s spirit is free and willing to speak with you, they appear and you can have a conversation with them. During this time, the creature responds to you as they would have in life. If the creature isn’t free or willing to appear, you can speak another name or choose another respite activity.`,
  source: "Class"
});

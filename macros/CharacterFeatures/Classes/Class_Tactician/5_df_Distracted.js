//@id=6eZGbU59pYgk8d4r
//@name=Distracted
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Distracted",
  description: `You have mastered the ability to distract your foes, allowing you and your allies to take advantage of their gaps in attention. Whenever you or any ally attempts to hide, any creature marked by you doesn’t count as an observer. Additionally, you and your allies can use other allies as cover for the purpose of hiding.`,
  source: "Class"
});

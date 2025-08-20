//@id=PM6R4sfn2wxN7W38
//@name=Saint’s Epiphany
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Saint’s Epiphany",
  description: `At the start of a respite, you can inspire yourself or another creature taking the same respite with divine knowledge. If the target makes a project roll during this respite, they can add 1d10 plus your Presence score to the roll.`,
  source: "Class"
});

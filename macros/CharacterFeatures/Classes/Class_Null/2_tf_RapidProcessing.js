//@id=SimM4RCIZGrPA3Dv
//@name=Rapid Processing
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Rapid Processing",
  description: `As a maneuver, you can read an entire book or process a similar amount of information. Additionally, during any respite, you can take an additional respite activity.`,
  source: "Class"
});

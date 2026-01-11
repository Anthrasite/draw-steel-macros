//@id=bDQIXd958jPuqycU
//@name=Animal Form: Crow
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Animal Form: Crow",
  description: `While you are in your crow form, your size is 1T and you can fly. You can use the Hide maneuver as a free maneuver, and you can use your allies as cover when you hide. You can’t use any abilities while in this form except for Aspect of the Wild.`,
  source: "Class"
});

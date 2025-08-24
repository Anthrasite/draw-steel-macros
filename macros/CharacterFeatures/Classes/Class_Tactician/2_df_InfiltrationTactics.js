//@id=tpUQIvCjnie6XG7H
//@name=Infiltration Tactics
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Infiltration Tactics",
  description: `You have trained your squad to work together, stay silent, and wait for the opportune time to strike. Whenever you or any ally within 10 squares of you becomes hidden, that creature gains 1 surge.`,
  source: "Class"
});

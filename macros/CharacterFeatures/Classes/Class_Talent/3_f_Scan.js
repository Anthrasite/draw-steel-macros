//@id=dJOg0Ilht7DVFpyL
//@name=Scan
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Scan`,
  description: `You can extend your psionic senses beyond their usual range. Once on each of your turns, you can search for hidden creatures as a free maneuver. Additionally, once you establish line of effect to a thinking creature within distance of your Mind Spike ability, you always have line of effect to that creature until they move beyond that distance.`,
  source: `Class`,
});

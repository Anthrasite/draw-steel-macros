//@id=t8nXoUrRgf1L59FO
//@name=Beyondsight
//@img=icons/magic/symbols/star-rising-purple.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Beyondsight",
  description: `As a maneuver, you can adjust your vision to allow you to see through mundane obstructions that are 1 square thick or less. While your vision is adjusted this way, you can’t see the area within 1 square of you and you don’t have line of effect to any creature or object in that area. You can restore your usual vision as a maneuver.`,
  source: "Ancestry"
});

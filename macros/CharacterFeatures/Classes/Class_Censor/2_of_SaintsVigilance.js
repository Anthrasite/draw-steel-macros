//@id=6xUjWBcwqK3Ah7P9
//@name=Saint’s Vigilance
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Saint’s Vigilance`,
  description: `You have honed your ability to detect sin and can use it to find those who hide from justice. Any creature judged by you can’t use the Hide maneuver. Additionally, you gain an edge when searching for hidden creatures. If you find a hidden creature, you can use your Judgment ability against them as a free triggered action.`,
  source: `Class`,
});

//@id=g4a7KNCpTlAJxU28
//@name=Four-Armed Martial Arts
//@img=icons/magic/symbols/star-rising-purple.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Four-Armed Martial Arts",
  description: `Your multiple arms let you take on multiple tasks at the same time. Whenever you use the Grab or Knockback maneuver against an adjacent creature, you can target one additional adjacent creature, using the same power roll for both targets. Additionally, you can have up to two creatures grabbed at a time.`,
  source: "Ancestry"
});

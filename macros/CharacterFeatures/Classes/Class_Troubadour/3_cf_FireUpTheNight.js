//@id=vfn7ZDVKPtCgUIQJ
//@name=“Fire Up the Night”
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `“Fire Up the Night”`,
  flavorText: `Maybe you and I ♪ We can still bring the light! ♪`,
  keywords: `Area, Magic, Performance`,
  type: `No action`,
  distance: `5 aura`,
  target: `Self and each ally in the area`,
  effect: `While this performance is active, each target who starts their turn in the area doesn’t take a bane on strikes against creatures with concealment. Once during their turn, they can search for hidden creatures as a free maneuver.`,
});

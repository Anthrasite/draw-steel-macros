//@id=lVIXROYSW4mKEore
//@name=Missed Cue
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Missed Cue`,
  description: `If you aren’t surprised at the start of an encounter, you can choose one enemy within your line of effect who is not a leader or solo creature. The Director temporarily removes the chosen creature from the encounter. The chosen creature enters the encounter at the start of the second combat round. You must earn 3 Victories before you can use this feature again.`,
  source: `Class`,
});

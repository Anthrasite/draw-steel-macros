//@id=5sERhovm61Qf349n
//@name=Troupe Leading Player - Flying Circus
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Troupe Leading Player - Flying Circus`,
  description: `When you are adjacent to a willing ally on their turn, you can use a triggered action to push them up to 2 squares if their size is the same as yours, or 4 squares if they are smaller. If this push causes the ally to fall, they can use a maneuver before they fall to reduce the height of the fall by 2.`,
  source: `Title`,
});

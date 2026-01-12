//@id=J2LVUq4YCGgTukcz
//@name=Otherworldly Grace
//@img=icons/environment/settlement/watchtower-cliff.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Otherworldly Grace`,
  description: `Your elf body and mind can’t be contained for long. Whenever you make a saving throw, you succeed on a roll of 5 or higher.`,
  source: `Ancestry`,
});


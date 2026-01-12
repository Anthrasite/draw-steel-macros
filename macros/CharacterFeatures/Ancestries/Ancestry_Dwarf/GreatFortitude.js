//@id=ijD9F3el5KZxyY4f
//@name=Great Fortitude
//@img=icons/environment/wilderness/cave-entrance-dwarven-hill.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Great Fortitude`,
  description: `Your hearty constitution prevents you from losing strength. You can’t be made weakened.`,
  source: `Ancestry`,
});

//@id=J2jImgFvMAWC0bdO
//@name=Former Life
//@img=icons/magic/death/hand-dirt-undead-zombie.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Former Life`,
  description: `Choose the ancestry you were before you died. Your size is that ancestry’s size and your speed is 5. Unless you select one of the Previous Life traits (see below), you don’t receive any other ancestral traits from your original ancestry.`,
  source: `Ancestry`,
});

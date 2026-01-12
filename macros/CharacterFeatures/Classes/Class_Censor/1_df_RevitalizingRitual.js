//@id=Ksh0JE4AHXPBwx6V
//@name=Revitalizing Ritual
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Revitalizing Ritual`,
  description: `Each time you finish a respite, you can choose yourself or one ally who is also finishing a respite to gain the benefit of a divine ritual. The chosen character gains a bonus to their recovery value equal to your level that lasts until you finish another respite.`,
  source: `Class`,
});

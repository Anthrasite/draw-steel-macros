//@id=xmo5KGVeELAsXgNF
//@name=Improved Sanctified Weapon
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Improved Sanctified Weapon`,
  description: `The weapon improved by your Sanctified Weapon feature grants a +3 bonus to rolled damage instead of +1.`,
  source: `Class`,
});

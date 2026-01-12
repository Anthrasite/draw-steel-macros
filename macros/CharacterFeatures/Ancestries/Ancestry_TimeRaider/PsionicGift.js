//@id=NCciZ8tDGWd7L462
//@name=Psionic Gift
//@img=icons/magic/symbols/star-rising-purple.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Psionic Gift`,
  description: `Choose one signature ability from the following options: Concussive Slam, Psionic Bolt, or Minor Acceleration. Signature abilities can be used at will.`,
  source: `Ancestry`,
});

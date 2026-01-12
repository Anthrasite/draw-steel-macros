//@id=BKWfl5y1amHDp8hk
//@name=Godsworn - Healing Gift
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Godsworn - Healing Gift`,
  description: `You can use the 1st-level Conduit feature Healing Grace as if you had spent 1 piety. Once you use this benefit, you can’t use it again until you earn 1 or more Victories.`,
  source: `Title`,
});

//@id=ztLDMXoh2G6TFlgs
//@name=Tireless - Undying
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Tireless - Undying`,
  description: `<p>Your choice of your Might or Agility increases by 1 (to a maximum of 6).</p>
    <p>Additionally, you can’t be affected by the bleeding condition.</p>`,
  source: `Title`,
});

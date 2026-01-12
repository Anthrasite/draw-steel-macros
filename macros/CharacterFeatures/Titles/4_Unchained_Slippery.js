//@id=gLN9WBuv2aKfbPJI
//@name=Unchained - Slippery
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Unchained - Slippery`,
  description: `<p>Your choice of your Might or Agility increases by 1 (to a maximum of 6).</p>
    <p>Additionally, you can’t be grabbed against your will.</p>`,
  source: `Title`,
});

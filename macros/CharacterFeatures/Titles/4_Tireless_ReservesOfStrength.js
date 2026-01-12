//@id=lc9hda6QtDMEyK8z
//@name=Tireless - Reserves of Strength
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Tireless - Reserves of Strength`,
  description: `<p>Your choice of your Might or Agility increases by 1 (to a maximum of 6).</p>
    <p>Additionally, your recovery value is half your Stamina.</p>`,
  source: `Title`,
});

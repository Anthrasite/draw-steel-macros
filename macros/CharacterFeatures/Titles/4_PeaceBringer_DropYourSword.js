//@id=i7d9HyE6P5rWeDaR
//@name=Peace Bringer - Drop Your Sword
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Peace Bringer - Drop Your Sword`,
  description: `<p>Your choice of your Reason or Presence increases by 1 (to a maximum of 6).</p>
    <p>Additionally, when you succeed on a test using the Intimidate skill, you can cause affected creatures to drop any items they are holding.</p>`,
  source: `Title`,
});

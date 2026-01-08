//@id=y8dGwUhoV5I69cNO
//@name=Demon Slayer - Soulsight
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Demon Slayer - Soulsight",
  description: `Any creature within 2 squares can’t be hidden from you.</p>
    <p>When you make a Presence test and roll a natural 5 or lower, you are cursed to communicate in only Proto-Ctholl for 1 minute, whether you know that language or not.</p>`,
  source: "Title"
});

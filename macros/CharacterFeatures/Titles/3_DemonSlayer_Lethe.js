//@id=vKEwpXDTc41yINAJ
//@name=Demon Slayer - Lethe
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Demon Slayer - Lethe",
  description: `<p>While you are winded, your strikes gain a +5 damage bonus.</p>
    <p>When you make a Presence test and roll a natural 5 or lower, you are cursed to communicate in only Proto-Ctholl for 1 minute, whether you know that language or not.</p>`,
  source: "Title"
});

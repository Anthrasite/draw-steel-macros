//@id=iRpP3Wv25moC98f6
//@name=Reborn - Kill Me Once, Shame On You
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Reborn - Kill Me Once, Shame On You",
  description: `<p>A god or other powerful being has determined that it is not yet your time to die. Your body fades away, but you reappear alive 24 hours later in a location of your choice. You regain all your Stamina and Recoveries, and your choice of your Intuition or Presence increases by 1 (to a maximum of 6).</p>
    <p>Additionally, choose a creature keyword belonging to one of the creatures who defeated you. Any creature with that keyword takes a bane on ability rolls against you.</p>
    <p>If a hakaan gains this title as a result of using their Doomsight trait, they lose that trait.</p>`,
  source: "Title"
});

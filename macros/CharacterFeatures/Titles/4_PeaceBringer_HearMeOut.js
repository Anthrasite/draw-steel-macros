//@id=Ds75JRdN1GnKp2ik
//@name=Peace Bringer - Hear Me Out
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Peace Bringer - Hear Me Out",
  description: `Your choice of your Reason or Presence increases by 1 (to a maximum of 6).</p>
    <p>Additionally, while you are present in a negotiation, an NPC’s starting patience increases by 3 (to a maximum of 5).</p>`,
  source: "Title"
});

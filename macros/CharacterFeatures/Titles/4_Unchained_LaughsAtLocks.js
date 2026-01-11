//@id=QCdMvcyLDm793AIB
//@name=Unchained - Laughs at Locks
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Unchained - Laughs at Locks",
  description: `<p>Your choice of your Might or Agility increases by 1 (to a maximum of 6).</p>
    <p>Additionally, whenever you make a test to open a lock or break a restraint, you don’t need any tools and you automatically obtain a tier 3 outcome.</p>`,
  source: "Title"
});

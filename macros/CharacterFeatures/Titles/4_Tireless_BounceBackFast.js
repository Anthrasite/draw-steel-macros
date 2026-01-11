//@id=cCxKGHWRyYZefnaj
//@name=Tireless - Bounce Back Fast
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Tireless - Bounce Back Fast",
  description: `<p>Your choice of your Might or Agility increases by 1 (to a maximum of 6).</p>
    <p>Additionally, whenever you rest for 8 hours or more, you can gain the benefit of a respite. Once you use this benefit, you can’t use it again until you have taken a regular respite.</p>`,
  source: "Title"
});

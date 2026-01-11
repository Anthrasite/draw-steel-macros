//@id=1RlAI3byZJXmnO6U
//@name=Enlightened - Cosmic Revelation
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Enlightened - Cosmic Revelation",
  description: `<p>Your choice of your Reason or Intuition increases by 1 (to a maximum of 6).</p>
    <p>Additionally, when you make a test with a skill from the lore skill group and obtain a tier 1 or tier 2 outcome, you can instead obtain a tier 3 outcome. Once you use this benefit, you can’t use it again until you earn 1 or more Victories.</p>`,
  source: "Title"
});

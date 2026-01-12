//@id=PtL0Kw8BUcm9Ev3M
//@name=Faction Member - Academic Faction
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Faction Member - Academic Faction`,
  description: `<p>You gain membership in a faction. You’re regarded as a promising but untested agent, and you’re allowed to operate independently. You can be assigned tasks to further your faction’s goals, and you can expect rewards and promotion if you succeed. When engaged in a negotiation with any member of your faction, their patience increases by 2 (to a maximum of 5).</p>
    <p>Additionally, you find a sage who can make up to three Reason tests to recall lore or make project rolls for research projects on your behalf. The sage has a +5 bonus to these tests. These project rolls take 10 minutes each and don’t need to be made during a respite. You can use this benefit only in a settlement where your faction has a presence, and once you use this benefit, you can’t use it again until you complete a task for your faction.</p>
    <p>You can be stripped of this title if you act against the faction’s interests.</p>`,
  source: `Title`,
});

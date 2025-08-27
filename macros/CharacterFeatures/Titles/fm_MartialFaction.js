//@id=iKR3nhE0WjL9pkJr
//@name=Martial Faction
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Martial Faction",
  description: `You gain membership in a faction. You’re regarded as a promising but untested agent, and you’re allowed to operate independently. You can be assigned tasks to further your faction’s goals, and you can expect rewards and promotion if you succeed. When engaged in a negotiation with any member of your faction, their patience increases by 2 (to a maximum of 5).</p>
    <p>Additionally, you recruit up to three minions with levels no greater than your own, of a type appropriate for the faction (such as human guards). These minions follow your orders for a day. You can use this benefit only in a settlement where your faction has a presence, and once you use this benefit, you can’t use it again until you complete a task for your faction.</p>`,
  source: "Title"
});

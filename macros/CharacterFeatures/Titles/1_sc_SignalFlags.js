//@id=3mVdL2Db8ONk5iW0
//@name=Signal Flags
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Signal Flags",
  description: `While aboard a ship, you can communicate with and conduct negotiations with another ship up to 5 miles away, as long as you and creatures on the other ship have line of effect to each other. You gain an edge on Presence tests made while negotiating in this way.`,
  source: "Title"
});

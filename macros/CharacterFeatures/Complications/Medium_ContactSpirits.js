//@id=WoeGI4VlUZiMwR5y
//@name=Contact Spirits
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Contact Spirits`,
  flavorText: `The restless dead speak to you.`,
  keywords: `Magic`,
  type: `Main action`,
  distance: `Self`,
  target: `Self`,
  powerRollStat: `Intuition or Presence`,
  tier1Effect: `You take corruption damage equal to 5 + your level.`,
  tier2Effect: `The spirit of anyone you know of who has died speaks to you, provided they are on the same world as you. You learn how they died and can ask them one question, which they can answer truthfully or untruthfully. The spirit knows everything they knew in life, and is aware of events that took place in their immediate surroundings since their death.`,
  tier3Effect: `As tier 2, but you can ask three questions.`,
  effect: `If any sapient creatures have died nearby within the last 24 hours, you have a double bane on the power roll for this ability if any of those creatures were hostile to you, or a double edge if any of them were friendly to you. When you use this ability, you can’t do so again until you earn 1 or more Victories.`,
});

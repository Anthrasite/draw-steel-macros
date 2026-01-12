//@id=rl9pF2QWgUJuLMIn
//@name=Wanted Dead or Alive - Minion Mower
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Wanted Dead or Alive - Minion Mower`,
  description: `When you make a melee strike that targets a minion and at least one more minion is within distance of the strike, the strike gains a +3 damage bonus.`,
  source: `Title`,
});

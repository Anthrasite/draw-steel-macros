//@id=jPWa2eQrkg0TwKR9
//@name=Maestro - Angelic Chorus
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Maestro - Angelic Chorus",
  description: `You can use the lessons of musical improvisation in combat. Choose one class act triggered action from the troubadour class. You gain that ability regardless of whether your class and subclass allow you to take it. If this ability allows you to gain or spend drama, you can gain or spend the Heroic Resource of your class in place of drama.`,
  source: "Title"
});

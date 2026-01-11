//@id=LkI9jYwrQySF8zWt
//@name=Mundane
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Mundane",
  description: `<p>You’re hopelessly nonmagical. When you try to use magic abilities, or even when they’re used on you, they never work right. Even magic devices seem to fizzle in your presence.</p>
    <p><b>Benefit:</b> You have immunity to corruption, holy, and psychic damage equal to your level.</p>
    <p><b>Drawback:</b> Whenever you carry more than three magic treasures, you take a bane on power rolls.</p>`,
  source: "Complication"
});


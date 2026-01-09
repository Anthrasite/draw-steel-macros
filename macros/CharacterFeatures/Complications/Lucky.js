//@id=2B9LKJt6nf0exPMk
//@name=Lucky
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lucky",
  description: `You’ve always had a lucky streak. When you leave things in the hands of fate, you succeed more than you fail. But luck is fickle—and when you don’t trust it, it deserts you.</p>
    <p><b>Benefit:</b> When you spend a hero token to succeed on a saving throw or to reroll a test, roll a d10. On a 6 or higher, you gain the benefit but don’t spend the hero token.</p>
    <p><b>Drawback:</b> Whenever you obtain a tier 1 outcome on a test and don’t spend a hero token to reroll, you take a bane on the next test you make.</p>`,
  source: "Complication"
});


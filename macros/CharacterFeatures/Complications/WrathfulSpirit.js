//@id=cxihyLMp65J4ws32
//@name=Wrathful Spirit
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Wrathful Spirit`,
  description: `<p>You’re quick to anger, never letting an insult go without slinging one right back. In combat, you fight as if possessed by a literal spirit of wrath. No matter the tactical circumstances, when someone injures you, you feel compelled to answer blood with blood.</p>
    <p><b>Benefit:</b> While you are taunted by a creature, you gain an edge on strikes against that creature. Additionally, you can spend 1 Heroic Resource to have a double edge instead.</p>
    <p><b>Drawback:</b> In combat, whenever a creature makes a strike against you and you are not taunted, you are taunted by that creature until the end of your next turn. Additionally, whether in casual conversation or if you are involved in a negotiation, whenever a creature insults you, you must either spend a Recovery or be compelled to reply with an insult.</p>`,
  source: `Complication`,
});


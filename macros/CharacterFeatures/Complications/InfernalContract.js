//@id=Koql3pHUkRuxVWi9
//@name=Infernal Contract
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Infernal Contract",
  description: `<p>You made a deal (perhaps unknowingly) with an archdevil that has tied you to that fiend’s service. When you first learned of this deal, you were taken to the Seven Cities of Hell, where some of the timescape’s best minds taught you the ways of battle. The archdevil allows you to use these gifts as you will … until they require a favor from you.</p>
    <p><b>Benefit:</b> Whenever you are present for a battle in which both sides have creatures who aren’t surprised, your side determines who goes first if the d10 roll is a 4 or higher.</p>
    <p><b>Drawback:</b> The archdevil occasionally asks you to defeat enemies on their behalf. If you refuse, your fiendish patron sends devils after you and those you care about.</p>`,
  source: "Complication"
});


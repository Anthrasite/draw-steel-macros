//@id=7oc6bCawLWji8v1R
//@name=Secret Identity
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Secret Identity",
  description: `<p>You’re secretly important—but it’s not safe for your true identity to be known. Perhaps you’re the witness to a crime or a member of a royal family on the run from a usurper. Until you are no longer at risk of being hunted, you’ll maintain the guise of an ordinary adventurer.</p>
    <p><b>Benefit:</b> You have a skill of your choice from the intrigue skill group. Additionally, you can resume your true identity temporarily. While in your true identity, your Renown and Wealth are treated as 2 higher than usual, and you might gain other benefits in consultation with the Director.</p>
    <p><b>Drawback:</b> Each time you resume your true identity while you are still hunted, you have a 20 percent cumulative chance each day that your enemies will find you. This chance resets if you resume your secret identity for 1 day.</p>`,
  source: "Complication"
});


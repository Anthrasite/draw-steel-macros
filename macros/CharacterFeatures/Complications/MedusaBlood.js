//@id=8KI0iTWN3pAclLQq
//@name=Medusa Blood
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Medusa Blood",
  description: `Your mother and father never saw eye to eye. You know this because your father is still alive and your mother is a medusa. This made your childhood difficult, and now it’s making your adulthood complicated as well.</p>
    <p><b>Benefit:</b> You have the Stone Eyes ability.</p>
    <p><b>Drawback:</b> Out of combat, you use your Stone Eyes ability on anyone who meets your gaze, whether you intend to or not. Your companions know not to make eye contact, but strangers are likely to trigger the ability unless you cover your eyes.</p>`,
  source: "Complication"
});


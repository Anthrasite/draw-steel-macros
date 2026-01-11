//@id=uGLY9j7xgbOhDkB2
//@name=Voice in Your Head
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Voice in Your Head",
  description: `<p>You occasionally hear a voice in your head, giving you orders or offering advice. You don’t know who the voice is or why it comes to you, but when you’ve followed the advice, it’s usually proved to be sound.</p>
    <p><b>Benefit:</b> The Director tells you when you hear the voice. The voice seems to be aware of your surroundings, and its advice is usually vague but helpful. Someday its motivations might be different from your own, but for now, the voice seems keen on making sure you survive.</p>
    <p><b>Drawback:</b> Eventually, the voice reveals it wants something from you that you might not want to provide. If the voice is displeased with you, it can interrupt your rest during a respite, causing you to regain 2 fewer Recoveries than usual.</p>`,
  source: "Complication"
});


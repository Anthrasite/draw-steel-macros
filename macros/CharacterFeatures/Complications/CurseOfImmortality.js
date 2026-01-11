//@id=XteNoZfU4b9mivdw
//@name=Curse of Immortality
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Curse of Immortality",
  description: `<p>For as long as you can remember, you’ve never gotten older. You’ve simply adventured through one age after another. Still, your memory of past events—even those you were involved with—is a little hazy. Apparently, your memory isn’t as long-lived as you are.</p>
    <p><b>Benefit:</b> You don’t age. Additionally, whenever you would die, you instead enter a state of suspended animation indistinguishable from death. If your body isn’t destroyed by dying or while you remain in this state, you come back to life after 12 hours and regain Stamina equal to your recovery value.</p>
    <p><b>Drawback:</b> You take a bane on any test made to recall lore.</p>`,
  source: "Complication"
});

//@id=5janyYFG8fgCZtmi
//@name=Infernal Contract … But, Like, Bad
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Infernal Contract … But, Like, Bad",
  description: `<p>You made a deal with a devil. Not a very good deal, because it wasn’t a very good devil. It’s too late for regrets, though, because your soul is forfeit unless you find a loophole or can convince the devil to void the deal.</p>
    <p><b>Benefit:</b> Choose one of the following benefits:</p>
    <ul>
      <li>You earn 2 Renown.</li>
      <li>Your Wealth increases by 2.</li>
      <li>You gain a +3 bonus to Stamina.</li>
    </ul>
    <p><b>Drawback:</b> Your body bears a fiendish mark. Any creature who understands religion and notes the mark can tell that your soul belongs to Hell, imposing a bane on any test you make to interact with those creatures (unless they’re into that). Additionally, when you die, your soul goes to Hell and you can’t be restored to life.</p>`,
  source: "Complication"
});


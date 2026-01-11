//@id=W6teVFg3PRSHXyQA
//@name=Curse of Poverty
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Curse of Poverty",
  description: `<p>A soothsayer once predicted you would have a long life, even as they told you you’d never be rich. But you’re determined to prove them wrong. You’ll get rich or die trying!</p>
    <p><b>Benefit and Drawback:</b> Whenever you take a respite while your Wealth is higher than 1, some improbable event occurs that causes most of your money to vanish—including money you’ve hidden, loaned to others, or given away. Your Wealth is reduced to 1. For each point of Wealth you lose this way, your number of Recoveries increases by 1. Your Recoveries reset to their usual value the first time you take a respite with fewer Recoveries than your maximum.</p>`,
  source: "Complication"
});

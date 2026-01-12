//@id=1UPVmBf4o9yLGYMT
//@name=Famous Relative
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Famous Relative`,
  description: `<p>Sure, you’re a promising young hero in your own right—but people always ask you about your famous relative. Will you equal or surpass your relative’s accomplishments, or will you always live in their shadow?</p>
    <p><b>Benefit:</b> You have a piece of magic jewelry such as a signet ring. As a maneuver, you can use this item to summon your relative to your aid. Your relative starts with a Renown of 10 but otherwise has the same statistics you do. They make power rolls with an edge but don’t gain the benefits of any of your treasures. Your relative does their best to help you out of the current perilous situation, disappearing when the situation is resolved or after 1 hour. Once you summon your relative, you can’t do so again until you gain a level.</p>
    <p><b>Drawback:</b> You earn no Victories from combat encounters or other challenges for which your relative was present. Additionally, each time you summon your relative, the next time you gain Renown, your relative gains that Renown instead.</p>`,
  source: `Complication`,
});


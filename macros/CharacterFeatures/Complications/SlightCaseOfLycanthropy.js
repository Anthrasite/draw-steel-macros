//@id=PRden6w90ts52qZa
//@name=Slight Case of Lycanthropy
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Slight Case of Lycanthropy`,
  description: `<p>Maybe you were bitten as a child, or maybe it’s a family curse. Either way, you have a malady that is best not discussed in public, lest torches and pitchforks make an appearance.</p>
    <p><b>Benefit:</b> Whenever you make a non-minion creature winded or kill a non-minion creature, you gain 1 surge.</p>
    <p><b>Drawback:</b> At the start of each of your turns, if you have five or more surges—or one or more surges while in moonlight—you lose all your surges and become a wolfish hybrid until the end of your turn. While in that form, you have your usual statistics, but you must make a melee free strike against the nearest creature if you can. You can shift up to your speed toward that creature if necessary. If allies and enemies are equally near, you target an ally.</p>
    <p><b>Special:</b> You can’t take this complication if you are a fury with the stormwight primordial aspect.</p>`,
  source: `Complication`,
});


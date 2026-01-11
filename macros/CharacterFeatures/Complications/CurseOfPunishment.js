//@id=iXrBDh4lvPF2fueM
//@name=Curse of Punishment
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Curse of Punishment",
  description: `<p>Through ignorance, fear, spite, or selfishness, you refused to help someone in need. To teach you a lesson, a deity offered you what seemed to be a blessing—extra power to help you heal yourself in times of need, but harsh consequences should your need become excessive. You took the deal, and now benefit from the blessing but also suffer from a curse.</p>
    <p><b>Benefit:</b> You have 1 additional Recovery.</p>
    <p><b>Drawback:</b> When you are out of Recoveries, you are dying, no matter what your current Stamina is.</p>`,
  source: "Complication"
});

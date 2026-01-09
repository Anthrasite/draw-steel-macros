//@id=zKN1MT0mtRQEx3Jk
//@name=Gnoll-Mauled
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Gnoll-Mauled",
  description: `As a child, you survived a gnoll attack. But that attack left you with a jagged scar and the occasional fit of bloodlust.</p>
    <p><b>Benefit:</b> Whenever an ally within 5 squares is reduced to 0 Stamina, you can use a triggered action to move up to your speed and make a free strike.</p>
    <p><b>Drawback:</b> While you are dazed, if you start your turn adjacent to one or more creatures, you must use your main action to make a melee free strike against an adjacent creature.</p>
    <p><b>Special:</b> You can’t take this complication if you can’t be made dazed.</p>`,
  source: "Complication"
});


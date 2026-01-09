//@id=O6vriug9Azd4n370
//@name=Searching for a Cure
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Searching for a Cure",
  description: `Your homeland has been corrupted by some terrible curse or plague, and you’re the only one who escaped it. The members of your family still exist, but in changed forms—perhaps as vampire spawn, zombies, or living statues. People tell you the situation is hopeless, but you’re determined to find a cure that can undo your loved ones’ suffering.</p>
    <p><b>Benefit:</b> Choose a type of monster connected to your homeland’s plight, such as a vampire, ghost, or medusa. You have a +1 bonus to saving throws related to that monster’s abilities, and you treat your characteristic scores as 1 higher than usual for the purpose of resisting potencies related to those abilities.</p>
    <p><b>Drawback:</b> You have started to succumb to the curse or plague, and will suffer the fate of your family if you don’t find a cure soon. Work with the Director to determine the timeline of your transformation, which should be something that could happen during the campaign!</p>`,
  source: "Complication"
});


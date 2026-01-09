//@id=gbBPQzv5jqKFDwhT
//@name=Psychic Eruption
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Psychic Eruption",
  description: `In times of stress, you get headaches. Psionic energy builds up in your mind until you feel as though your head might explode. And if you’re not careful, it actually does explode, radiating psychic waves that harm friends and enemies alike.</p>
    <p><b>Benefit:</b> You have the Psychic Blast heroic ability.</p>
    <p><b>Drawback:</b> Whenever you become bleeding, frightened, or weakened, you must use Psychic Blast as a free triggered action.</p>`,
  source: "Complication"
});


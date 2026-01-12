//@id=ATqtjH2v4g35SnhI
//@name=Hunter
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Hunter`,
  description: `<p>You are hunting someone or something—perhaps a wanted criminal, a person who wronged you, or a dangerous monster or beast. You won’t rest until you face off against your quarry!</p>
    <p><b>Benefit:</b> Choose one skill from the following:</p>
    <ul>
      <li>Interrogate (from the interpersonal skill group)</li>
      <li>Alertness, Eavesdrop, Search, or Track (from the intrigue skill group)</li>
      <li>Criminal Underworld, Rumors, or Society (from the lore skill group)</li>
    </ul>
    <p>You have that skill, and you gain an edge on tests made to find or learn clues about your quarry.</p>
    <p><b>Drawback:</b> You are so obsessed with finding your quarry that you take a bane on any test made to track other creatures.</p>`,
  source: `Complication`,
});


//@id=PQceLktM4W1Xqmba
//@name=Greening
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Greening`,
  description: `<p>You once felt the call of a great tree in the middle of a forest, whose life force was being drained by a parasitic supernatural moss clinging to its roots. As you removed the moss, you felt as if you were being filled with green elemental energy. Sadly, the great tree withered before you could finish the job, but left behind a golden sapling you now carry with you, seeking the perfect place to plant it.</p>
    <p><b>Benefit:</b> You have corruption immunity 5.</p>
    <p><b>Drawback:</b> You have fire weakness 5.</p>`,
  source: `Complication`,
});


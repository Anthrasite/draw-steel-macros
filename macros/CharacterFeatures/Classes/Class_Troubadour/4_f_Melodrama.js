//@id=vVp6hUKkIXWugiMy
//@name=Melodrama
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Melodrama`,
  description: `<p>You have more ways of getting the most drama out of a situation. Choose two of the following events to add to the events that grant you drama during battle:</p>
    <ul>
      <li>Whenever a creature rolls a natural 2 on a power roll, you gain 2 drama.</li>
      <li>The first time the Director deals damage to a hero using a Villain action or an ability that costs Malice, you gain 2 drama.</li>
      <li>The first time a hero unwillingly falls 5 or more squares, you gain 2 drama.</li>
      <li>The first time a hero deals damage with 3 surges, you gain 2 drama.</li>
      <li>Whenever a hero spends their last Recovery, you gain 2 drama.</li>
    </ul>
    <p>Alternatively, you can forgo choosing a new event to choose one event you already have (including an event gained with this feature). Whenever the chosen event grants you drama, you gain 1 additional drama.</p>`,
  source: `Class`,
});

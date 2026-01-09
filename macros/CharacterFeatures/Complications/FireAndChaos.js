//@id=VL6YeI5GESwiFr9j
//@name=Fire and Chaos
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Fire and Chaos",
  description: `A great monster who breathed fire burned your home to the ground. While everything around you was consumed, you somehow stood strong amid the inferno, your body adapting to ignore the effects of the flames.</p>
    <p><b>Benefit:</b> You have fire immunity 5.</p>
    <p><b>Drawback:</b> You have cold weakness 5.</p>`,
  source: "Complication"
});


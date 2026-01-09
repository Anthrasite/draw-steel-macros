//@id=4ZmxadMGrs3efbjX
//@name=Lost in Time
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lost in Time",
  description: `In a long-ago age, a cataclysm overtook your city. You weren’t killed, but some arcane accident caused you to be suspended in time until now. Alone, you must navigate the world around you with a head full of outdated memories—and a few ancient secrets.</p>
    <p><b>Benefit:</b> Choose a damage type from acid, cold, corruption, fire, holy, lightning, poison, psychic, or sonic. Whenever you use a signature ability, you can have it deal your chosen damage type instead of its usual damage.</p>
    <p><b>Drawback:</b> You automatically fail any test made to recall information from the period during which you were suspended in time.</p>`,
  source: "Complication"
});


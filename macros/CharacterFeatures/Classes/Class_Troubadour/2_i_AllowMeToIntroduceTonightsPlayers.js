//@id=lgamyOx1uQJ89Eze
//@name=Allow Me to Introduce Tonight’s Players
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Allow Me to Introduce Tonight’s Players`,
  description: `Whenever you take the first turn in a combat encounter, you can use a main action to introduce yourself and your allies to your opponents. Each ally can shift up to their speed, and ability rolls made against them have a double bane until the end of the combat round. Additionally, any surprised enemy is no longer surprised.`,
  source: `Class`,
});

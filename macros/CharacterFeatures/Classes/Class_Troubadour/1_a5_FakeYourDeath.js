//@id=icFCsYw02KukSje6
//@name=Fake Your Death
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Fake Your Death`,
  resourceCost: 5,
  flavorText: `O happy dagger, this is thy sheath!`,
  keywords: `Magic`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `You turn invisible and create a magical illusion of your corpse falling in your space. While you are invisible, you gain a +3 bonus to speed and you ignore difficult terrain. The illusion and your invisibility last until the end of your next turn, or until the illusion is interacted with, you take damage, or you use a main action or a maneuver.`,
});

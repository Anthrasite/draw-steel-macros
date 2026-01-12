//@id=hlaXZYJeu4W1kCBm
//@name=Dragon Dreams
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Dragon Dreams`,
  description: `<p>You sometimes have strange dreams of a raging inferno … a gleaming pile of treasure … of spreading your wings and taking flight. You haven’t told anyone about these dreams, except for your one strange relative who seems to know more than they’re letting on.</p>
    <p><b>Benefit:</b> Choose 2 ancestry points’ worth of purchased dragon knight traits. You can use these traits whenever you have 5 or more Victories.</p>
    <p><b>Drawback:</b> Whenever you are reduced to 0 Stamina, you explode with heat and fire. You and each creature within 5 squares of you takes fire damage equal to twice your level. You can’t reduce this damage for yourself in any way.</p>`,
  source: `Complication`,
});


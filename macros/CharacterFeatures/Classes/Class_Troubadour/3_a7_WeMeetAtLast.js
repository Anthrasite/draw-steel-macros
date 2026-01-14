//@id=ETVSoBYwARF2iu4s
//@name=We Meet at Last
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `We Meet at Last`,
  resourceCost: 7,
  flavorText: `You magically intertwine your fate with another creature—for better or worse.`,
  keywords: `Magic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `One creature`,
  effect: `<p>Until the end of the encounter, both you and the target can target each other with abilities even if you are beyond distance, with the distance of this ability replacing those abilities’ distances. The target can’t be force moved by an ability used beyond distance this way.</p>
    <p>Additionally, once on each of your turns, you can use a free maneuver to communicate a motivating or dispiriting message to the target, either granting them 2 surges or forcing them to take a bane on the next ability roll they make before the start of your next turn.</p>`,
});

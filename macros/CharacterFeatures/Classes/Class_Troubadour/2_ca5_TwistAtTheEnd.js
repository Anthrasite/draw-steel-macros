//@id=0H3LXD8CRF97MeK5
//@name=Twist at the End
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Twist at the End`,
  resourceCost: 5,
  flavorText: `You didn’t see that coming, did you?!`,
  keywords: `Magic, Ranged`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One dead enemy`,
  effect: `A target who is not a leader or solo creature comes back to life with half their Stamina and becomes an ally under the Director’s control. The players can work with the Director to determine when the target takes their turn each combat round. At the end of the encounter, the target turns to dust and is blown away.`,
});

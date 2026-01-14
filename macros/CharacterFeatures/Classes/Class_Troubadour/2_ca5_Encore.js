//@id=LknowmPVy37K6Zc5
//@name=Encore
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Encore`,
  resourceCost: 5,
  flavorText: `Again! Again!`,
  keywords: `Magic, Strike`,
  type: `Main action`,
  distance: `Special`,
  target: `Special`,
  effect: `You use an ability that you have observed being used this combat round. The ability must have the Strike keyword, cost 5 or fewer of a Heroic Resource, and cost no Malice. When you make the strike, you use your Presence score for any power rolls, and any damage you deal is sonic damage.`,
});

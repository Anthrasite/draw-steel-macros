//@id=s2hbm6qA3FJ5Ngut
//@name=Turnabout Is Fair Play
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Turnabout Is Fair Play`,
  flavorText: `All’s fair in love and whatever.`,
  keywords: `Ranged`,
  type: `Triggered`,
  distance: `Ranged 10`,
  target: `One creature`,
  trigger: `The target makes an ability roll that has an edge, a double edge, a bane, or a double bane.`,
  effect: `An edge on the triggering roll becomes a bane, or a double edge becomes an edge. A bane becomes an edge, or a double bane becomes a bane.`,
  extraResourceCost: `3`,
  extraResourceEffect: `An edge on the triggering roll becomes a double bane, or a double edge is negated. A bane becomes a double edge, or a double bane is negated.`,
});

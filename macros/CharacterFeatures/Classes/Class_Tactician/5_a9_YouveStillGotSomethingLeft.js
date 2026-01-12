//@id=PbwUZ69sVozFa5i8
//@name=You’ve Still Got Something Left
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `You’ve Still Got Something Left`,
  flavorText: `You push an ally to use a heroic ability sooner than they otherwise would.`,
  resourceCost: 9,
  keywords: `Ranged`,
  type: `Main action`,
  distance: `Ranged 10`,
  target: `One ally`,
  effect: `The target uses a heroic ability with the Strike keyword as a free triggered action, and deals extra damage with that ability equal to your Reason score. The ability has its Heroic Resource cost reduced by 1 + your Reason score (minimum cost 0).`
});

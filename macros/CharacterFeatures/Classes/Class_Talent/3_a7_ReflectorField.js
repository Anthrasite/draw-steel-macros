//@id=FvCRLSEzO80tPaf4
//@name=Reflector Field
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Reflector Field`,
  flavorText: `A protective field reverses the momentum of incoming attacks.`,
  resourceCost: 7,
  keywords: `Area, Psionic, Telepathy`,
  type: `Main action`,
  distance: `3 aura`,
  target: `Special`,
  effect: `The aura lasts until the start of your next turn. Whenever an enemy targets an ally in the area with a ranged ability, the ability is negated on the ally and reflected back at the enemy. The ability deals half the damage to the enemy that it would have dealt to the ally and loses any additional effects.`,
  strainedEffect: `The size of the aura increases by 1. Whenever your aura reflects an ability, you take 2d6 damage and forget a memory, as determined by you and the Director.`,
});

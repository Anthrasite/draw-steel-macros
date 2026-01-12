//@id=5zKEl24VcbNoeTSx
//@name=Elemental Buffer
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Elemental Buffer`,
  description: `Whenever you reduce acid, cold, corruption, fire, lightning, poison, or sonic damage with damage immunity, you gain 2 surges that can be used only to increase the damage of your next strike.`,
  source: `Class`,
  onUseFunc: async function() {
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 2, isDelta: true });
  },
});

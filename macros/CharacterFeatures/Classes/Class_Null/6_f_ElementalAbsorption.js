//@id=Z5GKcdUgAYI89vMO
//@name=Elemental Absorption
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Elemental Absorption",
  description: `Whenever you use your Inertial Shield triggered action, you gain immunity to acid, cold, corruption, fire, lightning, poison, and sonic damage equal to your Intuition score against the triggering damage.`,
  source: "Class"
});

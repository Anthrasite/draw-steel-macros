//@id=JN2dqFCIZB4X1YkO
//@name=Psionic Martial Arts
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Psionic Martial Arts`,
  description: `Whenever you use the Knockback or Grab maneuver, you use Intuition instead of Might for the power roll and for determining if you can target creatures larger than you. Additionally, whenever you use the Knockback maneuver, you can choose to slide the target instead of pushing them.`,
  source: `Class`,
});

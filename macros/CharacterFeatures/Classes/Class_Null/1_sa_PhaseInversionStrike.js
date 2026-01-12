//@id=T6XMHKbjdQcLfk2n
//@name=Phase Inversion Strike
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Phase Inversion Strike`,
  flavorText: `You step momentarily out of phase as you pull an enemy through you.`,
  keywords: `Melee, Psionic, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature or object`,
  powerRollStat: `Agility`,
  tier1Effect: `4 + A damage; push 2`,
  tier2Effect: `6 + A damage; push 4`,
  tier3Effect: `8 + A damage; push 6`,
  effect: `Before the push is resolved, you teleport the target to a square adjacent to you and opposite the one they started in. If the target can’t be teleported this way, you can’t push them.`,
});

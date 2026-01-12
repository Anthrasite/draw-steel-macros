//@id=MN3ukH85g9VQOaoi
//@name=Frontal Assault
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Frontal Assault`,
  flavorText: `The purpose of a charge is to break their morale and force a retreat.`,
  resourceCost: 7,
  keywords: `—`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `Until the end of the encounter or until you are dying, the first time on a turn that you or any ally deals damage to a target marked by you, the creature who dealt the damage can push the target up to 2 squares and then shift up to 2 squares. Additionally, any ally using the Charge main action to target a creature marked by you can use a melee strike signature ability or a melee strike heroic ability instead of a melee free strike.`
});

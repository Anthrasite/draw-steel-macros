//@id=QAYBsTnEjySPMlUz
//@name=Phase Leap
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Phase Leap`,
  flavorText: `You leap beyond reality, leaving an afterimage of yourself.`,
  resourceCost: 9,
  keywords: `Psionic`,
  type: `Move`,
  distance: `Self`,
  target: `Self`,
  effect: `You jump up to your speed without provoking opportunity attacks. Until the end of your next turn, a static afterimage of you remains in the space you left, and any enemy adjacent to your afterimage takes a bane on ability rolls. You can use your abilities from your own space or from the space of your afterimage as if you were still there. Additionally, if your Null Field ability is active, your afterimage also projects the aura from that ability, which you control as if you were in the afterimage’s space.`,
});

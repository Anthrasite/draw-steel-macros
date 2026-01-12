//@id=tlcdHoP17F4f2qMw
//@name=Share Head
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Share Head`,
  flavorText: `You don’t have a head, but you can psionically borrow another.`,
  keywords: `Psionic, Ranged`,
  type: `Maneuver`,
  distance: `Ranged 10`,
  target: `One willing creature`,
  effect: `You can see, hear, and smell as if you were in the target’s space. Additionally, you can borrow their mouth to speak when you wish to do so, speaking in your own voice. This effect ends when you use Share Head on a different target, when the target moves more than 10 squares away from you, or when the target is no longer willing to share their head with you.`,
});

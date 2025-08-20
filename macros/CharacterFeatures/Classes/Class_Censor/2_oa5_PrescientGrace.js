//@id=7WrTKnjBO4Ce0PsM
//@name=Prescient Grace
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Prescient Grace",
  resourceCost: 5,
  flavorText: "Gifted by a prescient vision, you warn an ally of an impending attack.",
  keywords: "Magic, Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "Self or one ally",
  trigger: "An enemy within 10 squares starts their turn.",
  effect: "You can spend a Recovery to allow the target to regain Stamina equal to your recovery value. The target can then take their turn immediately before the triggering enemy.",
});

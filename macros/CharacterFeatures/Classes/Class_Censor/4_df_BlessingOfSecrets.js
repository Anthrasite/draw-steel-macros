//@id=Pg8uDqy3wJLtmvlF
//@name=Blessing of Secrets
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Blessing of Secrets",
  flavorText: "You project an illusory aura that makes you and allies harder to notice.",
  keywords: "Magic",
  type: "Maneuver",
  distance: "3 aura",
  target: "Self and each ally in the area",
  effect: "Each creature in the area has a double edge on tests made to hide or sneak. The aura lasts until you end it (no action required) or until a target harms or deals damage to a creature or object."
});

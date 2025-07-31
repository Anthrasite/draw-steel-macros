//@id=QouIkdzD21pRKvAm
//@name=Use Consumable
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Use Consumable",
  type: "Maneuver",
  description: `Unless otherwise noted in its description, a creature can activate a consumable treasure such as a potion with the Use Consumable maneuver. A creature can use this maneuver to administer a consumable treasure that benefits the user either to themself or to a willing adjacent creature.`
});

//@id=wJZApbQheKfvyN85
//@name=Hold On To Creature
//@img=icons/skills/movement/feet-winged-sandals-tan.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Hold On To Creature`,
  type: `Movement`,
  description: `If you are climbing or riding a creature, the creature can use a maneuver to attempt to knock you off, forcing you to make the following test:`,
  powerRollStat: `Might or Agility`,
  tier1Effect: `You fall off the creature into an unoccupied adjacent space of your choice, taking falling damage and landing prone as usual.`,
  tier2Effect: `You slide down the creature into an unoccupied adjacent space of your choice and don’t land prone.`,
  tier3Effect: `You continue to hold on to the creature.`,
});

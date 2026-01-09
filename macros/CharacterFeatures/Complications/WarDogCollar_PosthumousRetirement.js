//@id=Rr07qjzYxiJVdAln
//@name=Posthumous Retirement
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Posthumous Retirement",
  flavorText: "You make your modified collar explode.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "1 burst",
  target: "Each enemy in the area",
  effect: "Your loyalty collar detonates, dealing fire damage equal to 5 plus your level to each target. Once you use this ability, you can’t use it again until you spend 1 uninterrupted minute out of combat resetting the collar.",
  beforeRollFunc: async function() {
    const level = (await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `level` })).value;

    const roll = await new Roll(`5 + ${level}[lvl]`).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll: roll,
      flavor: `Fire damage`
    });
  }
});

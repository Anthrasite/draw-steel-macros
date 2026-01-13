//@id=URtJAm7iKjo501Df
//@name=Wrecking Ball
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Wrecking Ball`,
  resourceCost: 5,
  flavorText: `It’s easier to destroy than to create. Much easier, in fact!`,
  keywords: `Melee, Weapon`,
  type: `Maneuver`,
  distance: `Self; see below`,
  target: `Self`,
  powerRollStat: `Might`,
  tier1Effect: `Push 1`,
  tier2Effect: `Push 2`,
  tier3Effect: `Push 3`,
  effect: `<p>You move up to your speed in a straight line. During this movement, you can move through mundane structures, including walls, which are difficult terrain for you. You automatically destroy each square of structure you move through and leave behind a square of difficult terrain.</p>
    <p>Additionally, you make one power roll that targets each enemy you move adjacent to during this movement.</p>`,
});

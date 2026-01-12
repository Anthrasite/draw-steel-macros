//@id=Ongxstlr9zedfEMv
//@name=Grab
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Grab`,
  keywords: `Melee, Weapon`,
  type: `Maneuver`,
  distance: `Melee 1`,
  target: `One creature`,
  description: `A creature seeking to keep a foe close and locked down can attempt to grab a creature using the following ability:`,
  powerRollStat: `Might`,
  tier1Effect: `No effect.`,
  tier2Effect: `You can grab the target, but if you do, the target can make a melee free strike against you before they are grabbed.`,
  tier3Effect: `The target is grabbed by you.`,
  effect: `<p>You can usually target only creatures of your size or smaller. If your Might score is 2 or higher, you can target any creature with a size equal to or less than your Might score.</p>
    <p>Unless otherwise indicated, a creature can grab only one creature at a time.</p>`
});

//@id=7acbUknvENlQsmIr
//@name=“Thunder Mother”
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "“Thunder Mother”",
  flavorText: "All for thunder motherrr! ♪ Run and hide for coverrr! ♪",
  keywords: "Magic, Performance, Ranged, Strike",
  type: "No action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Presence",
  tier1Effect: "Lightning damage equal to your level",
  tier2Effect: "Lightning damage equal to 5 + your level",
  tier3Effect: "Lightning damage equal to 10 + your level",
  effect: "At the end of each combat round while this performance is active, you can make a power roll against the target that ignores cover. You can’t target the same creature twice with this effect.",
  getDamageFunc: async function(rollResult) {
    const level = (await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `level` })).value;
    const damage = `${rollResult.tier === 3 ? `10 + ` : rollResult.tier === 2 ? `5 + ` : ``}${level}`;
    return { diceDamage: undefined, constDamage: damage, charDamageOptions: undefined, damageType: "lightning" };
  }
});

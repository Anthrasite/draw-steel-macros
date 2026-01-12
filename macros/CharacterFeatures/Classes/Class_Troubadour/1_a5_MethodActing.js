//@id=R8bSGsKZpoNjyE2D
//@name=Method Acting
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Method Acting`,
  resourceCost: 5,
  flavorText: `They’re so hurt by your performance, you start to believe it yourself.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  powerRollStat: `Agility`,
  tier1Effect: `6 + A damage; P < WEAK, weakened (save ends)`,
  tier2Effect: `10 + A damage; P < AVERAGE, weakened (save ends)`,
  tier3Effect: `14 + A damage; P < STRONG, weakened (save ends)`,
  effect: `You can become bleeding (save ends) to deal an extra 5 corruption damage to the target.`,
  afterRollFunc: async function(rollResult) {
    const bleed = await Dialog.confirm({
      title: `Bleed?`,
      content: `<p>Become bleeding to deal extra damage?</p>`
    });

    if (bleed) {
      const roll = await new Roll(`5`).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        activeActor: actor,
        roll,
        flavor: `Corruption damage`
      });
    }
  },
});

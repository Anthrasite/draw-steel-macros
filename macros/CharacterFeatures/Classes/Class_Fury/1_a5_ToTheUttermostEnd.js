//@id=9AD5EwMVa0iO4PBb
//@name=To the Uttermost End
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "To the Uttermost End",
  resourceCost: 5,
  flavorText: "You gut your life force to ensure a foe’s demise.",
  keywords: "Melee, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Might",
  tier1Effect: "7 + M damage",
  tier2Effect: "11 + M damage",
  tier3Effect: "16 + M damage",
  extraResourceCost: "1+",
  extraResourceEffect: "While you are winded, this ability deals an extra 1d6 damage for each ferocity spent. While you are dying, it deals an extra 1d10 damage for each ferocity spent. In either case, you lose 1d6 Stamina after making this strike.",
  extraResourceFunc: async function(extraResourceUsed, rollResult) {
    const stamina = await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `stamina` });

    let damageDie = undefined;
    if (stamina.value <= 0)
      damageDie = `d10`;
    else if (stamina.value <= Math.floro(stamina.max / 2))
      damageDie = `d6`;

    if (damageDie) {
      const roll = await new Roll(`${extraResourceUsed}${damageDie}`).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        activeActor: actor,
        roll,
        flavor: `Extra damage`
      });
    }
  }
});

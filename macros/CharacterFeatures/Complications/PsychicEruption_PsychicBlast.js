//@id=mNI93FcTaSBs7Mxl
//@name=Psychic Blast
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Psychic Blast`,
  resourceCost: 1,
  flavorText: `Psionic energy bursts from your body in an iridescent shimmer.`,
  keywords: `Area, Psionic`,
  type: `Main action`,
  distance: `3 burst`,
  target: `Each creature in the area`,
  powerRollStat: `Might, Agility, Reason, Intuition, or Presence`,
  tier1Effect: `1 psychic damage for each Heroic Resource you spend, to a maximum equal to your level`,
  tier2Effect: `1 psychic damage for each Heroic Resource you spend, to a maximum equal to your level + your highest characteristic`,
  tier3Effect: `1 psychic damage for each Heroic Resource you spend`,
  effect: `Using this ability costs all your Heroic Resource.`,
  extraResourceCost: `1+`,
  extraResourceEffect: `Deals 1 psychic damage for each Heroic Resource you spend.`,
  extraResourceFunc: async function(extraResourceUsed, rollResult) {
    let psychicDamage = extraResourceUsed;

    if (rollResult.tier <= 2) {
      const level = (await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `level` })).value;
      const psychicDamage = Math.min(extraResourceUsed, rollResult === 1 ? level : level + (await game.macros.getName(`GetHighestCharacteristic`).execute({ activeActor: actor })));
    }

    const roll = await new Roll(psychicDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Psychic damage`
    });
  },
});

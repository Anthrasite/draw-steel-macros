//@id=qwzW21jgiY9sSGE4
//@name=Blood Magic - Bloody Murder
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Blood Magic - Bloody Murder`,
  description: `When you deal rolled damage to a creature with a strike, you can take damage equal to your level to deal twice that much corruption damage to the creature. The damage you take from this title can’t be reduced in any way. You can use this benefit only once per ability. If the creature is reduced to 0 Stamina by this corruption damage, the creature explodes in a shower of blood and you regain the Stamina you lost. You can’t use this benefit on creatures without blood, such as constructs, elementals, or undead.`,
  source: `Title`,
});

//@id=R16msDfWKpAoTnVh
//@name=Chilling Readiness
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Chilling Readiness`,
  description: `You steel yourself for imminent danger by tapping into your body’s cold energy. At the start of any combat, you gain a number of surges equal to your Victories.`,
  source: `Class`,
  onUseFunc: async function() {
    const victories = (await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `victories` })).value;
    if (victories > 0)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: victories, isDelta: true });
  },
});

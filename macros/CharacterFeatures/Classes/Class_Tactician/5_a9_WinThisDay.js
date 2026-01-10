//@id=flsbGWxAvh0RQYCF
//@name=Win This Day!
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Win This Day!",
  flavorText: "You inspire your allies to recover and gather their strength.",
  resourceCost: 9,
  keywords: "Area",
  type: "Main action",
  distance: "3 burst",
  target: "Self and each ally in the area",
  effect: `Each target gains 2 surges. Additionally, they can spend a Recovery, remove any conditions or effects on them, and stand up if they are prone.`,
  beforeRollFunc: async function() {
    await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 2, isDelta: true });
  }
});

//@id=3kGA4YKFuvhbdm8H
//@name=You Are Already Dead
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `You Are Already Dead`,
  resourceCost: 7,
  flavorText: `Slash. Walk away.`,
  keywords: `Melee, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1`,
  target: `One creature`,
  effect: `If the target is not a leader or solo creature, they are reduced to 0 Stamina at the end of their next turn. If the target is a leader or solo creature, you gain 3 surges and can make a melee free strike against them.`,
  afterRollFunc: async function(rollResult) {
    const leaderOrSolo = await Dialog.confirm({
      title: `Leader or solo creature?`,
      content: `<p>Is the target a leader or solo creature?</p>`,
      defaultYes: false
    });

    if (leaderOrSolo)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 3, isDelta: true });
  },
});

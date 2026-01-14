//@id=S2PFqWMOKILlg46k
//@name=Star Solo
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Star Solo`,
  resourceCost: 7,
  flavorText: `Your performance travels and doesn’t stop moving until your audience is completely rocked.`,
  keywords: `Magic, Melee, Ranged, Strike, Weapon`,
  type: `Main action`,
  distance: `Melee 1 or ranged 10`,
  target: `One creature or object`,
  powerRollStat: `Presence`,
  tier1Effect: `5 + P damage`,
  tier2Effect: `8 + P damage; push 3`,
  tier3Effect: `11 + P damage; push 5`,
  effect: `You can choose to have this ability deal sonic damage. Additionally, you can use this ability against the same target for the next 2 combat rounds without spending drama.`,
  getCostFunc: async function(actualResourceCost) {
    const free = await Dialog.confirm({
      title: `Same target?`,
      content: `<p>Was this ability used against the same target within the last 2 combat rounds?</p>`
    });

    return free ? 0 : actualResourceCost;
  },
});

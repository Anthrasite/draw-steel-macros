//@id=GHFeWDUNyodxZ8LB
//@name=Gods’ Machine
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Gods’ Machine",
  resourceCost: 9,
  flavorText: "You conjure a whirring tank made of blades and metal.",
  keywords: "Magic, Ranged",
  type: "Main action",
  distance: "Ranged 10",
  target: "Special",
  powerRollStat: "Intuition",
  tier1Effect: "3 damage",
  tier2Effect: "5 damage",
  tier3Effect: "8 damage",
  effect: `<p>You conjure a size 2 rolling machine that appears in an unoccupied space within distance. The machine has 50 Stamina and immunity all to poison and psychic damage. It disappears at the end of the encounter, if its Stamina drops to 0, or if you are dying. When the machine first appears, make the following power roll once, targeting each enemy adjacent to it.</p>
    <p>Once on each subsequent turn, you can use a free maneuver to move the machine a number of squares up to your Intuition score then repeat the power roll.</p>`,
  getCostFunc: async function(actualResourceCost) {
    const free = await Dialog.confirm({
      title: `Machine exists?`,
      content: `<p>Does the machine already exist?</p>`
    });

    return free ? 0 : actualResourceCost;
  }
});

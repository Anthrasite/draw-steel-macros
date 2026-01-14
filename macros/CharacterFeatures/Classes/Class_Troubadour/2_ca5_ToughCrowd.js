//@id=CZQn7rzhmity29B1
//@name=Tough Crowd
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Tough Crowd`,
  resourceCost: 5,
  flavorText: `Your fans don’t seem to like the opening act …`,
  keywords: `Area, Magic, Ranged`,
  type: `Main action`,
  distance: `3 cube within 10`,
  target: `Special`,
  powerRollStat: `Presence`,
  tier1Effect: `5 corruption damage; M < WEAK, pull 1 toward the center of the area`,
  tier2Effect: `9 corruption damage; M < AVERAGE, pull 2 toward the center of the area`,
  tier3Effect: `12 corruption damage; M < STRONG, pull 3 toward the center of the area`,
  effect: `The area is haunted by a swirling horde of phantoms until the end of the encounter. Allies can enter any square of the area without spending movement. At the end of each of your turns, you can make one power roll that targets each enemy in the area.`,
  getCostFunc: async function(actualResourceCost) {
    const free = await Dialog.confirm({
      title: `Phantoms exists?`,
      content: `<p>Do the phantoms already exist?</p>`
    });

    return free ? 0 : actualResourceCost;
  },
});

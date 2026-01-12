//@id=zfZIgvHKbWpwUDVJ
//@name=Black Ash Teleport
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Black Ash Teleport`,
  flavorText: `In a swirl of black ash, you step from one place to another.`,
  keywords: `Magic`,
  type: `Maneuver`,
  distance: `Self`,
  target: `Self`,
  effect: `You teleport up to 5 squares. If you have concealment or cover at your destination, you can use the Hide maneuver even if you are observed. If you successfully hide using this maneuver, you gain 1 surge.`,
  extraResourceCost: `1+`,
  extraResourceEffect: `You teleport 1 additional square for each insight spent.`,
  beforeRollFunc: async function() {
    const successfullyHid = await Dialog.confirm({
      title: `Successfully hid?`,
      content: `<p>Did you successfully hide using this maneuver?</p>`
    });

    if (successfullyHid)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor: actor, attributeName: `surges`, value: 1, isDelta: true });
  },
});

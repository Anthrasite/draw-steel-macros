//@id=4EwOSZPWf5nL7jxd
//@name=Ease the Mind
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Ease the Mind`,
  description: `You gain an edge on tests made to stop combat and start a negotiation. Additionally, if you are present during a negotiation, any NPC who has a hostile or suspicious starting attitude has their patience increased by 1 (to a maximum of 5).`,
  source: `Class`,
});

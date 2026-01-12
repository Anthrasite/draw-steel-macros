//@id=Q9ZmVPaB3M1XinHq
//@name=Previous Life: 1 Point
//@img=icons/magic/death/hand-dirt-undead-zombie.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Previous Life: 1 Point`,
  description: `You select a purchased trait that costs 1 ancestry point from your previous ancestry. You can take this trait multiple times, selecting a different 1 point trait from your previous ancestry each time.`,
  source: `Ancestry`,
});

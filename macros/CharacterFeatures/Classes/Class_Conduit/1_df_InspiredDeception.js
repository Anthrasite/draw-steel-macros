//@id=fpckPhSiGrxwAX3Y
//@name=Inspired Deception
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Inspired Deception`,
  description: `The gods favor your thievery with magic. Whenever you make a test that uses a skill you have from the intrigue skill group, you can use Intuition on the test instead of another characteristic.`,
  source: `Class`,
});

//@id=mzaVYG8xJbZEFA9k
//@name=Quickness Ward
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Quickness Ward",
  description: `The gods imbue a divine swiftness within you. Whenever an adjacent creature deals damage to you, you can shift up to a number of squares equal to your Intuition score after the damage is dealt.`,
  source: "Class"
});

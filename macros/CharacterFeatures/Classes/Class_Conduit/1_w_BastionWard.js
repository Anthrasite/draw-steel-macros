//@id=q6ictWjwA4zI1hXE
//@name=Bastion Ward
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Bastion Ward",
  description: `Your god grants you a holy countenance that protects you at all times. You gain a +1 bonus to saving throws.`,
  source: "Class"
});

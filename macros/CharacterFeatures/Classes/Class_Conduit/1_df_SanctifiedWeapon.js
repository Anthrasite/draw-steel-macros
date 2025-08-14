//@id=gbX2v3tCJLPaGOKe
//@name=Sanctified Weapon
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Sanctified Weapon",
  description: `As a respite activity, you can bless a weapon. Any creature who wields the weapon gains a +1 bonus to rolled damage with abilities that use the weapon. This benefit lasts until you finish another respite.`,
  source: "Class"
});

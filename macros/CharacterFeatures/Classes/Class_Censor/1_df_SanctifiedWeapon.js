//@id=s2yUnuwAScG7JgO4
//@name=Sanctified Weapon
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Sanctified Weapon",
  description: `As a respite activity, you can bless a weapon. Any creature who wields the weapon gains a +1 bonus to rolled damage with abilities that use the weapon. This benefit lasts until you finish another respite.`,
  source: "Class"
});

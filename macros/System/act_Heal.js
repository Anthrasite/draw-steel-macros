//@id=HiFb3k4oJEC8XPue
//@name=Heal
//@img=icons/skills/melee/strike-polearm-light-orange.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Heal",
  type: "Main Action",
  description: `A creature who uses the Heal action employs medicine or inspiring words to make an adjacent creature feel better and stay in the fight. The target creature can spend a Recovery to regain Stamina, or can make a saving throw against one effect they are suffering that can be ended by a saving throw.`
});

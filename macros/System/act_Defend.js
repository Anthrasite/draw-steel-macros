//@id=eSX4cNtP1yuY0nof
//@name=Defend
//@img=icons/skills/melee/strike-polearm-light-orange.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Defend",
  type: "Main action",
  description: `When a creature takes the Defend main action, ability rolls made against them have a double bane until the start of their next turn. Additionally, you have a double edge on tests when called for to resist environmental effects or a creature’s traits or abilities. A creature gains no benefit from this action while another creature is taunted by them.`
});

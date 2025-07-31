//@id=eSX4cNtP1yuY0nof
//@name=Defend
//@img=icons/skills/melee/strike-polearm-light-orange.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Defend",
  type: "Main Action",
  description: `When a creature takes the Defend action, ability rolls made against them have a double bane until the start of their next turn. A creature gains no benefit from this action while another creature is taunted by them.`
});

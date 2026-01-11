//@id=kdKaYiCQupM8fT2E
//@name=Brutal Slam
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Brutal Slam",
  flavorText: "The heavy impact of your weapon attacks drives your foes ever back.",
  keywords: "Melee, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might",
  tier1Effect: "3 + M damage; push 1",
  tier2Effect: "6 + M damage; push 2",
  tier3Effect: "9 + M damage; push 4"
});

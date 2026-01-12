//@id=MI054qWvXTZDHUwo
//@name=Revitalizing Grace
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Revitalizing Grace`,
  resourceCost: 9,
  flavorText: `With a gesture, you restore your health and that of your allies.`,
  keywords: `Area, Magic`,
  type: `Main action`,
  distance: `4 burst`,
  target: `Self and each ally in the area`,
  effect: `Each target can spend any number of Recoveries. Additionally, each target can end one effect on themself that is ended by a saving throw or that ends at the end of their turn, or they can stand up if prone.`,
});

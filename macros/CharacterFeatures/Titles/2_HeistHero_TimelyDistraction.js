//@id=tn5Uf7HNzYDIbcvw
//@name=Heist Hero - Timely Distraction
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Heist Hero - Timely Distraction",
  flavorText: "Coming through with hot soup! I better watch out for that banana peel!",
  keywords: "Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "One creature",
  trigger: "An ally makes a test to lie to, pick the pocket of, hide from, or sneak by the target and doesn’t like the outcome.",
  effect: "You momentarily attract the target’s notice to let your ally reroll their test. Once you use this ability, you can’t use it again against the same target for 1 hour."
});

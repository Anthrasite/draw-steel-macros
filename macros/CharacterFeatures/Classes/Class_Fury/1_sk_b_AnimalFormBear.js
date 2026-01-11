//@id=3bGYv1oSZmlhDHAF
//@name=Animal Form: Bear
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Animal Form: Bear",
  description: `While you are in your bear form, your size is 2 and you gain a +1 bonus to distance with melee weapon abilities.`,
  source: "Class"
});

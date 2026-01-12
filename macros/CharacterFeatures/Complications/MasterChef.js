//@id=nwMy5lJBKERGb7Ar
//@name=Master Chef
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Master Chef`,
  description: `<p>Before you were a hero, you were a chef—and when you retire, you have big plans for your next restaurant or inn. In the meantime, you’re on the lookout for rare ingredients that only a wandering adventurer can find. After all, it’s food that makes the world go round.</p>
    <p><b>Benefit:</b> You have the Cooking skill (from the crafting skill group). Additionally, whenever you finish a respite or wake up after a night’s sleep, you can spend 1 uninterrupted hour to prepare an excellent meal for up to ten creatures, provided you have ingredients and cooking tools. Once over the next 24 hours, each creature who eats the meal can gain the benefit of spending a Recovery without spending a Recovery.</p>
    <p><b>Drawback:</b> The first time each day you eat food you didn’t prepare, you lose 2 Recoveries.</p>`,
  source: `Complication`,
});


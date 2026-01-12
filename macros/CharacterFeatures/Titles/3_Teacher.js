//@id=flSnd17YzhHpRGF5
//@name=Teacher
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Teacher`,
  description: `You can travel with a student who shares your class. The student has the statistics of a 1st-level member of your class and has the same skills as you, but doesn’t engage in combat. They can perform any out-of-combat tasks a 1st-level member of your class can perform. Whenever they make a test to assist you in a task, they can’t obtain less than a tier 2 outcome on the test.`,
  source: `Title`,
});

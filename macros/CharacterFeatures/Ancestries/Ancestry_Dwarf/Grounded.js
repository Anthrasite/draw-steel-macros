//@id=aHEu6z3JjOi9foDI
//@name=Grounded
//@img=icons/environment/wilderness/cave-entrance-dwarven-hill.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Grounded`,
  description: `Your heavy stone body and connection to the earth make it difficult for others to move you. You have a +1 bonus to stability.`,
  source: `Ancestry`,
});

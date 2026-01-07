//@id=Ho3KWLjz2mn8B7Rk
//@name=Corruption Immunity
//@img=icons/magic/light/orbs-hand-gray.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Corruption Immunity",
  description: `Your innate shadow magic grants you resilience against the unnatural. You have corruption immunity equal to your level + 2.`,
  source: "Ancestry"
});

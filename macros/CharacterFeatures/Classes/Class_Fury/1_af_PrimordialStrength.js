//@id=XSbmGgAPTBUdhxNt
//@name=Primordial Strength
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Primordial Strength",
  description: `Whenever you damage an object with a weapon strike, the strike deals extra damage equal to your Might score. Additionally, whenever you push another creature into an object, the creature takes extra damage equal to your Might score.`,
  source: "Class"
});

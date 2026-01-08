//@id=7s2O5QSuTle03WHi
//@name=Arena Fighter - Foes as Weapons
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Arena Fighter - Foes as Weapons",
  description: `Whenever you have a creature of your size or smaller grabbed, you can use them as a weapon when you make a melee weapon free strike. Both the target and the grabbed enemy take the strike’s damage.`,
  source: "Title"
});

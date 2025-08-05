//@id=dBfvZQ1sMup8PtE9
//@name=Wyrmplate
//@img=modules/draw-steel-macros/icons/ancestry/dragon-knight.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Wyrmplate",
  description: "Your hardened scales grant you damage immunity equal to your level to one of the following damage types: acid, cold, corruption, fire, lightning, or poison. You can change your damage immunity type when you finish a respite.",
  source: "Ancestry"
});

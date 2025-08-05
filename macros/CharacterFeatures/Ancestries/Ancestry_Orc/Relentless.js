//@id=0kyGVPJOmjgRXf7I
//@name=Relentless
//@img=modules/draw-steel-macros/icons/ancestry/orc.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Relentless",
  description: `Whenever a creature deals damage to you that leaves you dying, you can make a free strike against any creature. If the creature is reduced to 0 Stamina by your strike, you can spend a Recovery.`,
  source: "Ancestry"
});

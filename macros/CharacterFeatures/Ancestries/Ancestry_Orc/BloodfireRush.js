//@id=DCeNWsakbdEhgXwH
//@name=Bloodfire Rush
//@img=modules/draw-steel-macros/icons/ancestry/orc.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Bloodfire Rush",
  description: `The magic coursing through your veins makes you run faster in the heat of battle. The first time in any combat round that you take damage, you gain a +2 bonus to speed until the end of the round.`,
  source: "Ancestry"
});

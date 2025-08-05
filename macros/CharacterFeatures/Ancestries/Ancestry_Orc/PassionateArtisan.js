//@id=CdSReOkh6nP90TFG
//@name=Passionate Artisan
//@img=modules/draw-steel-macros/icons/ancestry/orc.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Passionate Artisan",
  description: `When you are stirred by a passion for creation, your bloodfire allows you to work longer and harder. When you gain your initial skills from your career, culture, class, or other source, choose two skills from the crafting skill group, whether you have those skills or not. Whenever you make a project roll for a crafting project that uses these skills, you gain a +2 bonus to the roll.`,
  source: "Ancestry"
});

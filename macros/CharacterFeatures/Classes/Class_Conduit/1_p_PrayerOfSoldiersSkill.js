//@id=u0erXRIfazG38HdM
//@name=Prayer of Soldier’s Skill
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Prayer of Soldier’s Skill",
  description: `<p>Your god gives your mind the training of a soldier. You can wear light armor and wield light weapons effectively, even though you don’t have a kit. While you wear light armor, you gain a +3 bonus to Stamina, and that bonus increases by 3 at 4th, 7th, and 10th levels. While you wield a light weapon, you gain a +1 damage bonus with weapon abilities, including free strikes. You can use light armor treasures and light weapon treasures.<p>
    <p>If you have a kit, you can’t take this blessing.</p>`,
  source: "Class"
});

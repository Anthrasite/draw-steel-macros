//@id=0MD32AsCtExKbg17
//@name=Battle Augmentation
//@img=icons/magic/perception/eye-ringed-glow-angry-small-teal.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Battle Augmentation`,
  description: `<p>You can wear light armor and wield light weapons effectively, even though you don’t have a kit. While you wear light armor, you gain a +3 bonus to Stamina, and that bonus increases by 3 at 4th, 7th, and 10th levels. While you wield a light weapon, you gain a +1 damage bonus with weapon abilities, including free strikes. You can use light armor treasures and light weapon treasures.</p>
    <p>If you have a kit, you can’t take this augmentation.</p>`,
  source: `Class`,
});

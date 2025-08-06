//@id=XfezH54RjDN78xaQ
//@name=Faster Than the Eye
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Faster Than the Eye",
  flavorText: "You strike so quickly that your hands become a blur.",
  keywords: "Melee, Psionic, Strike, Weapon",
  type: "Main action",
  distance: "Melee 1",
  target: "Two creatures or objects",
  powerRollStat: "Agility",
  tier1Effect: "4 damage",
  tier2Effect: "5 damage",
  tier3Effect: "7 damage",
  effect: "You can deal damage equal to your Agility score to one creature or object adjacent to you.",
  afterRollFunc: async function() {
    const doExtraDamage = await Dialog.confirm({
      title: `Adjacent target?`,
      content: `<p>Deal additional damage to an adjacent creature or object?</p>`,
      defaultYes: false
    });

    if (doExtraDamage) {
      const extraDamage = Math.max(0, await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: "Agility" }));
      const roll = await new Roll(extraDamage.toString()).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        activeActor: actor,
        roll,
        flavor: `Damage`
      });
    }
  }
});

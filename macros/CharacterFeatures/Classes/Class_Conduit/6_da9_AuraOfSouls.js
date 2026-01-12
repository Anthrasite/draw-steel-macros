//@id=bENZPQxcwodDWu65
//@name=Aura of Souls
//@img=icons/magic/holy/prayer-hands-glowing-yellow.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Aura of Souls`,
  resourceCost: 9,
  flavorText: `A whirlwind of souls of the dead flies around you at your command.`,
  keywords: `Area, Magic`,
  type: `Maneuver`,
  distance: `4 aura`,
  target: `Each creature in the area`,
  effect: `Until the end of the encounter or until you are dying, at the end of each of your turns, you can slide each creature in the area up to a number of squares equal to your Intuition score. This forced movement ignores stability for your allies.`,
});

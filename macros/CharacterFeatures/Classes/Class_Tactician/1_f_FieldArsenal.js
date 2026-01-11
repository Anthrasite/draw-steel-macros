//@id=sGP5YvakW2j3Lprm
//@name=Field Arsenal
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Field Arsenal",
  description: `<p>You have drilled with a broad array of arms and armor, and have developed techniques to optimize their use. You can use and gain the benefits of two kits, including both their signature abilities. Whenever you would choose or change one kit, you can choose or change your second kit as well.</p>
    <p>If both kits grant you the same benefit, you take one or the other and can’t change your choice until you finish a respite. (This usually means taking the higher of two bonuses.)</p>
    <p>Kit signature abilities have their kit’s bonuses already applied, which might require you to adjust the bonuses of the signature abilities you gain from a kit.</p>`,
  source: "Class"
});

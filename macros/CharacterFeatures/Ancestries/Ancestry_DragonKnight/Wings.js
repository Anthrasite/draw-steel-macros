//@id=viL3p0UaRmHYo2DE
//@name=Wings
//@img=modules/draw-steel-macros/icons/ancestry/dragon-knight.png
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Wings",
  description: `You possess wings powerful enough to take you airborne. While using your wings to fly, you can stay aloft for a number of rounds equal to your Might score (minimum 1 round) before you fall. While using your wings to fly at 3rd level or lower, you have damage weakness 5.`,
  source: "Ancestry"
});

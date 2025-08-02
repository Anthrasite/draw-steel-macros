//@id=hi1QF7EwgHD3eLVn
//@name=Draw steel
//@img=icons/skills/movement/figure-running-gray.webp
AudioHelper.play({src: "modules/draw-steel-macros/audio/sword-drawing.mp3", volume: 1, autoplay: true, loop: false}, true);

const roll = await new Roll(`1d10`).evaluate();
const heroesActFirst = roll.total >= 6;
await game.macros.getName(`ShareRoll`).execute({
  activeActor: actor,
  roll,
  flavor: `<span style="color: ${heroesActFirst ? `#008000` : `#800000`};">${heroesActFirst ? `Heroes` : `Foes`} strike first!</span>`
});

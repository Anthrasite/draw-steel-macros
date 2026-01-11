//@id=tiFVZr4sdauOSo6m
//@name=Motivate Earth
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Motivate Earth",
  flavorText: "The earth rises, falls, or opens up at your command.",
  keywords: "Earth, Magic, Melee",
  type: "Main action",
  distance: "Melee 1",
  target: "Special",
  effect: `<p>You touch a square containing mundane dirt, stone, or metal and create a 5 wall of the same material, which rises up out of the ground and must include the square you touched.</p>
    <p>Alternatively, you touch a structure made of mundane dirt, stone, or metal that occupies 2 or more squares. You can open a 1-square opening in the structure where you touched it. You can instead touch an existing doorway or other opening that is 1 square or smaller in a mundane dirt, stone, or metal surface. The opening is sealed by the same material that makes up the surface.</p>`
});

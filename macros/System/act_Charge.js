//@id=sEy5R2OakUgCQWX8
//@name=Charge
//@img=icons/skills/melee/strike-polearm-light-orange.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Charge",
  type: "Main Action",
  description: `When a creature takes the Charge action, they move up to their speed in a straight line, then make a melee free strike against a target when they end their move. If the creature has an ability with the Charge keyword, they can use that ability against the target instead of a free strike.</p>
    <p>A creature can’t move through difficult terrain or shift when they charge. They can fly or burrow as part of the Charge action if they have that movement available to them, but they can’t climb or swim while charging unless they can automatically use that movement at full speed.</p>`
});

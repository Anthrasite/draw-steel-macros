//@id=sEy5R2OakUgCQWX8
//@name=Charge
//@img=icons/skills/melee/strike-polearm-light-orange.webp
await game.macros.getName(`ShareAbility`).execute({
  activeActor: actor,
  name: `Charge`,
  type: `Main action`,
  description: `<p>When a creature takes the Charge main action, they move up to their speed in a straight line without jumping, then make a melee free strike against a target when they end their move. If the creature has an ability with the Charge keyword, they can use that ability against the target instead of a free strike.</p>
    <p>A creature can’t move through difficult terrain or shift when they charge. They can fly or burrow as part of the Charge main action if they have that movement available to them, but they can’t climb or swim while charging unless they can automatically use that movement at full speed.</p>`
});

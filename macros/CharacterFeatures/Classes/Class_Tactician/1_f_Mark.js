//@id=ib238ZlDMVUYmK1a
//@name=Mark
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Mark",
  flavorText: "You draw your allies’ attention to a specific foe—with devastating effect.",
  keywords: "Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "One creature",
  effect: `The target is marked by you until the end of the encounter, until you are dying, or until you use this ability again. You can willingly end your mark on a creature (no action required), and if another tactician marks a creature, your mark on that creature ends. When a creature marked by you is reduced to 0 Stamina, you can use a free triggered action to mark a new target within distance.</p>
    <p>You can initially mark only one creature using this ability, though other tactician abilities allow you to mark additional creatures at the same time. The mastermind tactical doctrine’s Anticipation feature allows you to target additional creatures with this ability starting at 5th level.</p>
    <p>While a creature marked by you is within your line of effect, you and allies within your line of effect gain an edge on power rolls made against that creature. Additionally, whenever you or any ally uses an ability to deal rolled damage to a creature marked by you, you can spend 1 focus to gain one of the following benefits as a free triggered action:</p>
    <ul>
      <li>The ability deals extra damage equal to twice your Reason score.</li>
      <li>The creature dealing the damage can spend a Recovery.</li>
      <li>The creature dealing the damage can shift up to a number of squares equal to your Reason score.</li>
      <li>If you damage a creature marked by you with a melee ability, the creature is taunted by you until the end of their next turn.</li>
    </ul>
    <p>You can’t gain more than one benefit from the same trigger.</p>`
});

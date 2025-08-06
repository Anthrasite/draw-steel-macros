//@id=bmdUBTKqgSLR0zjW
//@name=Null Field
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Null Field",
  flavorText: "You project an aura that dampens the power of your foes.",
  keywords: "Area, Psionic",
  type: "Maneuver",
  distance: "1 aura",
  target: "Each enemy in the area",
  effect: `Each target reduces their potencies by 1.</p>
    <p>Once as a free maneuver on each of your turns, you can spend 1 discipline and give your Null Field one of the following additional effects until the start of your next turn:</p>
    <ul>
      <li><strong>Gravitic Disruption</strong>: The first time on a turn that a target takes damage, you can slide them up to 2 squares.</li>
      <li><strong>Inertial Anchor</strong>: Any target who starts their turn in the area can’t shift.</li>
      <li><strong>Synaptic Break</strong>: Whenever you or any ally uses an ability against a target that has a potency effect, the potency is increased by 1.</li>
    </ul>
    <p>This ability remains active even after an encounter ends. It ends only if you are dying or if you willingly end it (no action required).</p>`
});

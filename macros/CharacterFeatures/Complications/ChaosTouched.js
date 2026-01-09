//@id=MADQ9VskgzLldN2W
//@name=Chaos Touched
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Chaos Touched",
  description: `You came into contact with a mote of pure chaos energy, or were subjected to a supernatural effect or object that fused chaos into your very being. Now you can sprout and retract your limbs in a way that horrifies unprepared onlookers.</p>
    <p><b>Benefit:</b> You gain an edge on the Escape Grab, Grab, and Knockback maneuvers. Additionally, you can hold an additional item even when your hands are full.</p>
    <p><b>Drawback:</b> While dying, you grow and retract uncoordinated limbs at random, imposing a bane on your power rolls.</p>`,
  source: "Complication"
});

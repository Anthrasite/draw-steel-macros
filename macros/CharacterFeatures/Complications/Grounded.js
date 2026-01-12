//@id=kA24cXJEpP1tMy7r
//@name=Grounded
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Grounded`,
  description: `<p>Once when you were a child, your settlement was in danger and you called out to the earth for aid. That call was answered by a summoning of protective dirt-and-stone walls, and ever since then, you’ve felt the earth’s presence as a friend and protector.</p>
    <p><b>Benefit:</b> You have the 1st-level Elementalist Specialization feature Motivate Earth. If you also gain this feature in any other way, the Motivate Earth ability becomes a ranged ability for you with a distance of ranged 5.</p>
    <p><b>Drawback:</b> You attract lightning. Whenever any creature within 2 squares of you takes lightning damage, you take 5 lightning damage that can’t be reduced in any way.</p>`,
  source: `Complication`,
});


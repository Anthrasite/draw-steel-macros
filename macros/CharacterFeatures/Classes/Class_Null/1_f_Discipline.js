//@id=kZLDeOgQSA7xFnGX
//@name=Discipline
//@img=icons/skills/melee/unarmed-punch-fist.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Discipline",
  description: `As your mastery of your body and tradition grows, it imbues you with a Heroic Resource called discipline.</p>
    <h3>Discipline in Combat</h3>
    <p>At the start of a combat encounter or some other stressful situation tracked in combat rounds (as determined by the Director), you gain discipline equal to your Victories. At the start of each of your turns during combat, you gain 2 discipline.</p>
    <p>Additionally, the first time each combat round that an enemy in the area of your Null Field ability (see below) uses a main action, you gain 1 discipline. The first time each combat round that the Director uses an ability that costs Malice, you gain 1 discipline.</p>
    <p>You lose any remaining discipline at the end of the encounter.</p>
    <h3>Discipline Outside of Combat</h3>
    <p>Though you can’t gain discipline outside of combat, you can use your heroic abilities and effects that cost discipline without spending it. Whenever you use an ability or effect outside of combat that costs discipline, you can’t use that same ability or effect outside of combat again until you earn 1 or more Victories or finish a respite.</p>
    <p>When you use an ability outside of combat that lets you spend unlimited discipline on its effect, you can use it as if you had spent an amount of discipline equal to your Victories. (Such abilities aren’t part of the core rules for the null, but they might appear in future products.)</p>`,
  source: "Class"
});

//@id=nUawqdpMfNtB7sbV
//@name=Focus
//@img=icons/weapons/swords/sword-hilt-steel-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Focus",
  description: `<p>The ring of steel panics others but brings order to your mind, granting you a Heroic Resource called focus.</p>
    <h3>Focus in Combat</h3>
    <p>At the start of a combat encounter or some other stressful situation tracked in combat rounds (as determined by the Director), you gain focus equal to your Victories. At the start of each of your turns during combat, you gain 2 focus.</p>
    <p>Additionally, the first time each combat round that you or any ally damages a creature marked by you, you gain 1 focus. The first time in a combat round that any ally within 10 squares of you uses a heroic ability, you gain 1 focus.</p>
    <p>You lose any remaining focus at the end of the encounter.</p>
    <h3>Focus Outside of Combat</h3>
    <p>Though you can’t gain focus outside of combat, you can use your heroic abilities and effects that cost focus without spending it. Whenever you use an ability or effect outside of combat that costs focus, you can’t use that same ability or effect outside of combat again until you earn 1 or more Victories or finish a respite.</p>
    <p>When you use an ability outside of combat that lets you spend unlimited focus on its effect, you can use it as if you had spent an amount of focus equal to your Victories. (Such abilities aren’t part of the core rules for the tactician, but they might appear in future products.)</p>`,
  source: "Class"
});

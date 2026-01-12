//@id=XA7pKdCNe98METsg
//@name=Ferocity
//@img=icons/skills/melee/strike-axe-red.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Ferocity`,
  description: `<p>Within the heat of battle, your determination and anger grow, fueling a Heroic Resource called ferocity.</p>
    <h3>Ferocity in Combat</h3>
    <p>At the start of a combat encounter or some other stressful situation tracked in combat rounds (as determined by the Director), you gain ferocity equal to your Victories. At the start of each of your turns during combat, you gain 1d3 ferocity.</p>
    <p>Additionally, the first time each combat round that you take damage, you gain 1 ferocity. The first time you become winded or are dying in an encounter, you gain 1d3 ferocity.</p>
    <p>You lose any remaining ferocity at the end of the encounter.</p>
    <h3>Ferocity Outside of Combat</h3>
    <p>Though you can’t gain ferocity outside of combat, you can use your heroic abilities and effects that cost ferocity without spending it. Whenever you use an ability or effect outside of combat that costs ferocity, you can’t use that same ability or effect outside of combat again until you earn 1 or more Victories or finish a respite.</p>
    <p>When you use an ability outside of combat that lets you spend unlimited ferocity on its effect, such as To the Uttermost End, you can use it as if you had spent an amount of ferocity equal to your Victories.</p>`,
  source: `Class`,
});

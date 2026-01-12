//@id=Xah2pzrE9sjfRN7w
//@name=Drama
//@img=icons/tools/instruments/lute-gold-brown.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Drama",
  description: `<p>During battles, you are fueled by the dynamic ups, downs, and upside downs of the fray, from which you derive a Heroic Resource called drama.</p>
    <h3>Drama in Combat</h3>
    <p>At the start of a combat encounter or some other stressful situation tracked in combat rounds (as determined by the Director), you gain drama equal to your Victories. At the start of each of your turns during combat, you gain 1d3 drama.</p>
    <p>Additionally, you gain drama when certain events occur during a combat encounter:</p>
    <ul>
      <li>The first time three or more heroes use an ability on the same turn, you gain 2 drama.</li>
      <li>The first time any hero is made winded during the encounter, you gain 2 drama.</li>
      <li>Whenever a creature within your line of effect rolls a natural 19 or 20, you gain 3 drama.</li>
      <li>When you or another hero dies, you gain 10 drama.</li>
    </ul>
    <p>When you are dead, you continue to gain drama during combat as long as your body is intact. If you have 30 drama during the encounter in which you died, you can come back to life with 1 Stamina and 0 drama (no action required). If you are still dead after the encounter in which you died, you can’t gain drama during future encounters.</p>
    <p>You lose any remaining drama at the end of the encounter.</p>
    <h3>Drama Outside of Combat</h3>
    <p>Though you can’t gain drama outside of combat, you can use your heroic abilities and effects that cost drama without spending it. Whenever you use an ability or effect outside of combat that costs drama, you can’t use that same ability or effect outside of combat again until you earn 1 or more Victories or finish a respite.</p>
    <p>When you use an ability outside of combat that lets you spend unlimited drama on its effect, such as Artful Flourish, you can use it as if you had spent an amount of drama equal to your Victories.</p>`,
  source: "Class"
});

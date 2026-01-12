//@id=UNbEFB4GyJ91zaqj
//@name=Coward
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Coward`,
  description: `<p>Some call you a coward, just because you shriek and run when you encounter danger. Sure, you might not have the natural bravado of less-imaginative people. And sure, you’re always imagining the many horrible ways you could die, but you’re used to fear. When you run in terror, you run toward the enemy.</p>
    <p><b>Benefit:</b> While you are frightened, you can move toward the source of your fear.</p>
    <p><b>Drawback:</b> Whenever you make a saving throw to end the frightened condition, you roll a d10 twice and take the lower roll.</p>`,
  source: `Complication`,
});

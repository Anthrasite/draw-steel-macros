//@id=ypDbmOj3Kuq7PL65
//@name=Guilty Conscience
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Guilty Conscience",
  description: `The world is in trouble—and it’s partly your fault. Maybe you helped a villain rise to power or inadvertently released a demon from imprisonment. Now it’s your mission to repair the damage you caused.</p>
    <p><b>Benefit:</b> You’re determined to stay alive so you can set things right. When your Stamina reaches the negative of your winded value, you can use a free triggered action to spend a Recovery.</p>
    <p><b>Drawback:</b> Many people blame you for the evils you caused. They might be unfriendly or hostile to you—and you can understand their point of view. You take a bane on any test made to interact with those who know what you did, and on strikes made against such creatures.</p>`,
  source: "Complication"
});


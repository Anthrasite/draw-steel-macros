//@id=TZQ8hcAftW45jqvK
//@name=Antihero
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Antihero",
  description: `<p>You used to be a villain. You’re (mostly) reformed now, but in desperate moments, you sometimes draw on the rage and hatred that fueled your old life. In those moments, even your friends aren’t sure whose side you’re on. They don’t need to worry, though. Once you leave evil behind, you can’t go back. You’ve made too many enemies on the other side.</p>
    <p><b>Benefit:</b> You have 3 antihero tokens. Whenever you use an ability or other effect that costs your Heroic Resource, you can spend 1 antihero token in place of 1 Heroic Resource. Whenever you have fewer than 3 antihero tokens and you would earn a hero token for your party through your deeds, you instead regain 1 antihero token.</p>
    <p><b>Drawback:</b> While you have fewer than 3 antihero tokens, you exude a villainous aspect. You and each ally within 5 squares of you take a bane on any test made to interact with other creatures.</p>`,
  source: "Complication"
});

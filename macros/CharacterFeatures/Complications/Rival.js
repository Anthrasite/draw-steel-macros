//@id=JPx71nDuL6aKCYBf
//@name=Rival
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Rival",
  description: `Whatever your accomplishments, you’ll forever measure yourself against a former companion who always seemed to stay one step ahead of you.</p>
    <p><b>Benefit:</b> Choose one of your skills. That skill grants a +3 bonus to tests instead of +2.</p>
    <p><b>Drawback:</b> Your rival has similar statistics to yours, but always had one skill they excelled at, as determined by the Director. Intimidated by their prowess, you take a bane on tests using that skill.</p>`,
  source: "Complication"
});


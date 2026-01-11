//@id=35IF1HYeqRUKGmca
//@name=Fiery Ideal
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Fiery Ideal",
  description: `<p>A spirit beyond your comprehension instilled in you a special purpose, choosing you to be the guardian of a place, a cause, or a philosophy. The flame that now burns in your soul can sear your enemies—or you if you fall short of expectations.</p>
    <p><b>Benefit:</b> While you fight on behalf of your special purpose, whenever you obtain a tier 3 outcome with a damage-dealing ability, the ability deals extra fire damage equal to your highest characteristic score.</p>
    <p><b>Drawback:</b> Whenever the Director determines that you act against your purpose or fail to live up to the high standards associated with it, you take fire damage equal to 5 + your level. This damage can’t be reduced in any way.</p>`,
  source: "Complication"
});


//@id=ceEgVYvosFXbDuiZ
//@name=Self-Taught
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Self-Taught`,
  description: `<p>While your peers were learning their trades in fancy schools, you honed your capabilities on the mean streets with nothing but your own instinct as a guide. What you lost in polish and tactical acumen, you now make up for in raw power.</p>
    <p><b>Benefit and Drawback:</b> At the start of each of your turns during combat, you can forgo gaining your Heroic Resource until the start of your next turn. If you do, your strikes gain a damage bonus equal to your highest characteristic score until the start of your next turn.</p>`,
  source: `Complication`,
});


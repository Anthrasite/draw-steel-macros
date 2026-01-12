//@id=xQ1qaeF34EdZ5Lh9
//@name=Shadow Born
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName(`ShareFeature`).execute({
  activeActor: actor,
  name: `Shadow Born`,
  description: `<p>You were born in the dusk land ruled by the Queen of Shadows, and its darkness has seeped into your bones.</p>
    <p><b>Benefit:</b> Whenever you start your turn with concealment, you gain 1 surge.</p>
    <p><b>Drawback:</b> You have holy weakness 5.</p>`,
  source: `Complication`,
});

